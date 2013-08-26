!function ($) {
 /* TREE PUBLIC CLASS DEFINITION
  * ============================ */

    var Tree = function (element, options) {
      this.$element = $(element)
      this.options = $.extend({}, $.fn.tree.defaults, options)

      this.$root = this.options.root = this.options.root || this.root(this.$element)
      this.$parent = this.options.parent = this.options.parent || this.parent(this.$element)

      this.$element.on('click.tree.data-api', $.proxy(this.toggle, this))
    }

    Tree.prototype = {
      constructor: Tree

    , parent : function($element){
      var $parent = undefined
      if('#'!=$element.attr('href'))
        $parent = this.$root.find($element.attr('href'))
      if(!$parent || !$parent.length)
        $parent = $element.closest('[data-type="tree-node"]')
      return $parent
    }

    , root : function($element){
      var $root = this.$element.closest('[data-type="tree-root"]')
      return $root
    }

    , is_beneath_root : function($element){
      this.options.root.contains($element);
    }

    , show_childs : function($elements){
        var that = this
        $elements.each(function(index, element){
          var $element = $(element)
          $element.show()
          if( !$element.hasClass('collapsed') ){
            that.show_childs(that.$root.find($element.data('childs')))
          }
        });
      }

    , hide_childs : function($elements){
        var that = this
        $elements.each(function(index, element){
          var $element = $(element)
          $element.hide()
          that.hide_childs(that.$root.find($element.data('childs')))
        });
      }

    , toggle : function(){
        var $parent = this.options.parent
        if( $parent.hasClass('collapsed') ) {
          this.show_childs(this.$root.find($parent.data('childs')))
          $parent.removeClass('collapsed')
          this.$element.removeClass('collapsed')
        } else {
          this.hide_childs(this.$root.find($parent.data('childs')))
          $parent.addClass('collapsed')
          this.$element.addClass('collapsed')
        }
        return false;
      }

    , insert_icons : function($elements, level){
        level++;
        var that = this
        var options = this.options
        $elements.each(function(index, element){
          var $element = $(element)
          var $insertTarget = $element.find('[data-type="tree-interactive"]').eq(0)
          var $childs = that.$root.find($element.data('childs'))
          var is_node = $childs.length>0
          if(is_node)
            $insertTarget.prepend(options.icons.open.clone())
                         .prepend(options.icons.closed.clone())
          for(var i=level-(is_node?1:0); i; i--)
            $insertTarget.prepend(options.icons.empty.clone())
          that.insert_icons($childs, level)
        });
      }

    , iconify : function(){
        var root = this.$root
        if(root.data('iconify') && !root.hasClass('tree-iconified')){
          root.addClass('tree-iconified')
          this.insert_icons(root.find(root.data('childs')), 0)
        }
      }

    }

   /* TREE PLUGIN DEFINITION
    * ====================== */

    var old = $.fn.tree

    $.fn.tree = function (option) {
      return this.each(function () {
        var $this = $(this)
          , data = $this.data('tree')
          , options = $.extend({}, $.fn.tree.defaults, $this.data(), typeof option == 'object' && option)
        if (!data) $this.data('tree', (data = new Tree(this, options)))
        if (typeof option == 'string') data[option]()
      })
    }

    /* some unicode "icons"
    ▾ : 25BE
    ▿ : 25BF
    ▸ : 25B8
    ▹ : 25B9 */
    $.fn.tree.defaults = {
      icons : {
        open : $('<div class="tree-open">&#x25BE;</div>'),
        closed : $('<div class="tree-closed" >&#x25B8;</div>'),
        empty : $('<div class="tree-empty" >&#x0020;</div>'),
      }
    }

    $.fn.tree.Constructor = Tree


    /* TREE NO CONFLICT
    * ================= */

    $.fn.tree.noConflict = function () {
      $.fn.tree = old
      return this
    }


   /* TREE DATA-API
    * ============= */

    $(window).on('load', function () {
      $(document).find('[data-type="tree-interactive"]').each(function(){
        $(this).tree()
        $(this).tree('iconify')
      })
    });
}(window.jQuery);
