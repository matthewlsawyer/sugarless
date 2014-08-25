/*
 * Namespace
 */
(function() {

  /*
   * Controller for nav tabs and pills
   */
  function NavController($scope) {
    var items = [];
    this.add = function(item, first) {
      if (items.length === 0) first(item);
      items.push(item);
    };
    this.click = function(item, add, remove) {
      angular.forEach(items, function(item) {
        remove(item);
      });
      add(item);
    };
  };

  /*
   * Link function for nav elements
   */
  function NavLink(scope, elem, attrs, controller) {
    var selected = "selected";
    controller.add(elem, function(item) {
      item.addClass(selected);
    });
    elem.bind("click", function() {
      controller.click(elem, function(item) {
        item.addClass(selected);
      }, function(item) {
        if (item.hasClass(selected)) item.removeClass(selected);
      });
    });   
  };

  /**
   * Nav directives module
   */
  angular.module("sugar.nav", [])

  /*
   * Nav tabs
   */
  .directive("navTabs", function() {
    return {
      restrict : "EA",
      template : "<nav class='nav-tabs'><ul ng-transclude></ul></nav>",
      replace : true,
      transclude : true,
      controller : NavController
    };
  })

  /*
   * Nav pills
   */
  .directive("navPills", function() {
    return {
      restrict : "EA",
      template : "<nav class='nav-pills'><ul ng-transclude></ul></nav>",
      replace : true,
      transclude : true,
      controller : NavController
    };
  })
  
  /*
   * Nav tab
   */
  .directive("navTab", function() {
    return {
      restrict : "EA",
      template : "<li><span class='icon icon-{{icon}}'></span> <span ng-transclude></span></li>",
      scope : { icon : "@" },
      replace : true,
      transclude : true,
      require : "^navTabs",
      link : NavLink
    };
  })

  /*
   * Nav pill
   */
  .directive("navPill", function() {
    return {
      restrict : "EA",
      template : "<li><span class='icon icon-{{icon}}'></span> <span ng-transclude></span></li>",
      scope : { icon : "@" },
      replace : true,
      transclude : true,
      require : "^navPills",
      link : NavLink
    };
  })
  ;
})();
