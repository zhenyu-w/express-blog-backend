import{A as t}from"./index.d7cf8a03.js";class r extends t{page(e){return this.$get("page",e)}pageAdmin(e){return this.$get("page_admin",e)}detail(e){return this.$get("detail",{id:e})}pageByCategory(e){return this.$get("page_by_category",e)}pageByTag(e){return this.$get("page_by_tag",e)}updateReadNum(e){return this.$put("update_read_num",{id:e})}topRead(e){return this.$get("top_read",e)}neighbors(e){return this.$get("neighbors",{id:e})}updatePrivate(e){return this.$put("update_private",e)}updateDeleted(e){return this.$put("update_deleted",e)}delete(e){return this.$del("delete",{id:e})}add(e){return this.$postJson("add",e)}update(e){return this.$putJson("update",e)}}const d=new r("article");export{d as a};
