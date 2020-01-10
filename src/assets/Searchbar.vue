<template>
     <v-text-field
       id="search" 
        hide-details
        prepend-inner-icon="search"
        single-line
        dense
        reverse
        flat
        autofocus
      ></v-text-field>
</template>



<style lang="scss">
#search{
  width:1px;
}

</style>



<!-- insert in script when functioning search
(right after String, in props)

filter: {
      type: Function,
      default: (item: any, queryText: string, itemtext: string) => {
        return itemText.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) > -1
      },
    },


-->
