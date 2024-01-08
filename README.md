# vue-learn

## Deployment path

https://artem-martiyanov.github.io/vue_learn/

## Краткое описание данной системы модальных окон

Модальное окно представлено тремя слоями:

1. [Базовый слой](https://github.com/Artem-Martiyanov/vue_learn/blob/main/src/components/ui/modals/base/BaseModalLayout.vue)
   <br/>
   Он не несёт стилизацию, а отвечает исключительно за иерархию и управление модальными окнами.
   (Следит за блокировкой скролла и режимом связанных модальных окон, также на него вешается анимация).
   <br/>
   <br/>
   Также на базовом уровне присутствует
   компонент [оверлея модального окна](https://github.com/Artem-Martiyanov/vue_learn/blob/main/src/components/ui/modals/base/BaseModalOverlay.vue),
   он опиционален, по умолчанию задний фон модального окна прозрачен для клика
   <br/>
   <br/>


2. Слой [Шаблон](https://github.com/Artem-Martiyanov/vue_learn/tree/main/src/components/ui/modals/templates)
   <br/>
   Этот слой формирует тип окна (простая модалка, уведомление, уведомление с кнопками отмены или применения, боковое
   модальное окно и т.д.).
   Шаблон может быть универсальным в пределах типа. Этот слой предусмотрен, чтобы избежать попыток сделать один огромный
   компонент,
   который покроет все бизнес задачи. Считаю, лучше сделать несколько простых.
   <br/>
   <br/>
   Для примера, я сделал 2 шаблона разных модальных
   окон. [Боковое](https://github.com/Artem-Martiyanov/vue_learn/blob/main/src/components/ui/modals/templates/SideModalTemplate.vue)
   и [Стандартное](https://github.com/Artem-Martiyanov/vue_learn/blob/main/src/components/ui/modals/templates/SimpleModalTemplate.vue).
   Уверен, при желании можно было сделать это одним компонентом, просто конфигурируя внешний вид пропсами, но зачем?
   Компонент разросся
   бы до нескольких сотен строк и ориентироваться было бы сложно.
   <br/>
   <br/>


3. Ну и 3
   слой - [Слой модальных окон](https://github.com/Artem-Martiyanov/vue_learn/tree/main/src/components/ui/modals).
   <br/>
   Здесь приведены примеры боковых панелей, которые унаследованы от
   этого [шаблона](https://github.com/Artem-Martiyanov/vue_learn/blob/main/src/components/ui/modals/templates/SideModalTemplate.vue),
   а также обычные окна.
   <br/>
   Причём показана даже вариация с глобальной панелью. Которая будет присутствовать на каждой странице, с доступом к
   управлению через [хуки](https://github.com/Artem-Martiyanov/vue_learn/blob/main/src/hooks/useGlobalModal.ts).
   А [здесь](https://github.com/Artem-Martiyanov/vue_learn/blob/main/src/pages/HomePage.vue) показан вариант
   использования
   <br/>
   <br/>

Для работы этой системы необходим любой стейт-менеджер. Здесь используется VueX.
Нужно создать слайс/модуль и т.д. примерно [такого вида](https://github.com/Artem-Martiyanov/vue_learn/blob/main/src/store/modules/ModalLayer.ts)



## Возможности

1. Модальные окна любых конфигураций и видов
2. Режим "связанных модальных окно"
3. Глобальные модальные окна

## Создание и использование

1. Стандартные окна
   <br>
   В папке [templates](https://github.com/Artem-Martiyanov/vue_learn/tree/main/src/components/ui/modals/templates)
   описываем тип данного окна (Важно, чтобы корневым тегом был
   компонент [BaseModalLayout](https://github.com/Artem-Martiyanov/vue_learn/blob/main/src/components/ui/modals/base/BaseModalLayout.vue)),
   выделяем общие стили, определяем степень гибкости и универсальности. Стараемся соблюдать баланс между
   чистотой/простотой и уменьшением дублирования кода.
   <br>
   <br>
   Н-р:
   В [этом шаблоне](https://github.com/Artem-Martiyanov/vue_learn/blob/main/src/components/ui/modals/templates/SideModalTemplate.vue)
   я определил пропсами, что на основе него можно сделать левую и правую панель, а также им будет доступен режим
   связанных модалок.
   <br>
   <br>
   После того, как шаблон описан, можно наследовать от него более конкретные сущности.
   <br>
   Н-р: [левое меню с навигацией](https://github.com/Artem-Martiyanov/vue_learn/blob/main/src/components/ui/modals/LeftMenuModal.vue),
   которое я поместил в Header
   и [правая глобальная панель](https://github.com/Artem-Martiyanov/vue_learn/blob/main/src/components/ui/modals/GlobalRightSideModal.vue)
   с условно полезной на всём сайте информацией, которую я для удобства поместил
   в [GlobalModals.vue](https://github.com/Artem-Martiyanov/vue_learn/blob/main/src/layouts/GlobalModals.vue), который
   будет рендериться на всех страницах.
   <br>
   <br>
   Для удобства использования обычных модальных окон есть
   хук [useModal](https://github.com/Artem-Martiyanov/vue_learn/blob/main/src/hooks/useModal.ts),
   который возвращает объект с реактивным
   флагом: [isVisible](https://github.com/Artem-Martiyanov/vue_learn/blob/main/src/hooks/useModal.ts#L16)
   и двумя методами, управляющими
   им [open](https://github.com/Artem-Martiyanov/vue_learn/blob/main/src/hooks/useModal.ts#L17)
   и [close](https://github.com/Artem-Martiyanov/vue_learn/blob/main/src/hooks/useModal.ts#L21).
   <br>
   [Пример использования](https://github.com/Artem-Martiyanov/vue_learn/blob/main/src/components/blocks/Header.vue#L11)

```vue

<script setup>
  import useModal from "@/hooks/useModal";

  const leftMenu = useModal()
</script>

<template>
  <Button @click="leftMenu.open">Открыть модальное окно</Button>

  <LeftMenuModal v-model:is-open="leftMenu.isVisible.value"/>
</template>
   ```

<br>
<br>

2. Связанные модальные окна
   <br>
   Для того, чтобы связать модальные окна, нужно передать им пропсами **одинаковый** id

```vue

<script setup>
  import useModal from "@/hooks/useModal";

  const firstModal = useModal()
  const secondModal = useModal()
  const thirdModal = useModal()
</script>

<template>
  <Button @click="firstModal.open">Открыть первое окно</Button>
  <Button @click="secondModal.open">Открыть второе окно</Button>
  <Button @click="thirdModal.open">Открыть третье окно</Button>

  <FirstModal
      v-model:is-open="firstModal.isVisible.value"
      connect-id="connected-modals"
  />

  <SecondModal
      v-model:is-open="secondModal.isVisible.value"
      connect-id="connected-modals"
  />

  <ThirdModal
      v-model:is-open="thirdModal.isVisible.value"
      connect-id="connected-modals"
  />
</template>
   ```

При открытии одного из связанных модальных окон, остальные закрываются.
<br/>
Н-р: в проекте
связаны [левое меню](https://github.com/Artem-Martiyanov/vue_learn/blob/main/src/components/blocks/Header.vue#L30) и
[правое](https://github.com/Artem-Martiyanov/vue_learn/blob/main/src/layouts/GlobalModals.vue#L6)

<br>
<br>

3. Глобальные модальные окна

Такие окна нужно особым образом конфигурировать и использовать:
Пример
создания [здесь](https://github.com/Artem-Martiyanov/vue_learn/blob/main/src/components/ui/modals/GlobalRightSideModal.vue#L12).
<br>
[Пример использования.](https://github.com/Artem-Martiyanov/vue_learn/blob/main/src/components/ui/modals/LeftMenuModal.vue#L16)

```vue
/*GlobalModal.vue*/
<script setup>
  import useRegisterGlobalModal from "@/hooks/useRegisterGlobalModal";
  import useGlobalModal from "./useGlobalModal";

  // Регистрируем глобальное модальное окно под именем globalModalName
  // Хук возвращает реактивный флаг, который также управляется извне
  const isOpenGlobal = useRegisterGlobalModal('globalModalName')
   
</script>

<template>
  <!--   Цепляем видимость окна к глобальному состоянию-->
  <SomeModalTemplate v-model:is-open="isOpenGlobal">
    ...
  </SomeModalTemplate>
</template>
   ```

```vue
/*GlobalModals.vue*/
<script setup>
  // Импортируем и вставляем глобальное модальное окно в доступный на каждой странице лэйаут
  import GlobalModal from "@/components/modals/GlobalModal.vue";
</script>

<template>
  <GlobalModal/>
</template>
   ```

```vue
/*OtherComponent.vue*/
<script setup>
  import useGlobalModal from "@/hooks/useGlobalModal";

  // Получаем объект управления глобальным модальным окном
  const globalModal = useGlobalModal('globalModalName')

</script>

<template>
  ...
  <Button @click="globalModal.open">Открыть глобальное окно</Button>
  ...

</template>
   ```
