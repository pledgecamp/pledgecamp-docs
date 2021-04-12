<template>
<div class="mermaid" id="mermaid">
  <slot />
</div>
</template>
<script>

export default {
  name: 'mermaid',
  mounted() {
    import('mermaid').then(module => {
      const merm = document.getElementById('mermaid');
      const text = merm.children[0].innerHTML;
      merm.innerHTML = text;
      module.initialize({
      theme: 'forest',
      gantt: {
        axisFormatter: [
          ['%Y-%m-%d', (d) => {
            return d.getDay() === 1
          }],
          ],
        },
      });
    });
  },
};
</script>
