import { ref } from '@vue/composition-api';

export function useToggle(initValue = false) {
  const visible = ref(initValue);
  const toggle = () => (visible.value = !visible.value);

  return { visible, toggle };
}
