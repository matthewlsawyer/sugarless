/**
 * Nav directives
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
    controller : function() {
      var tabs = [];
      this.addTab = function(tab) {
        if (tabs.length === 0) tab.addClass("selected");
        tabs.push(tab);
      };
      this.clickTab = function(tab) {
        angular.forEach(tabs, function(tab) {
          tab.removeClass("selected");
        });
        tab.addClass("selected");
      }
    }
  };
})

/*
 * Nav tab
 */
.directive("navTab", function() {
  return {
    restrict : "EA",
    template : "<li><span class='icon icon-{{icon}}'></span> <span ng-transclude></span></li>",
    scope : {
      icon : "@"
    },
    replace : true,
    transclude : true,
    require : "^navTabs",
    link : function(scope, elem, attrs, controller) {
      controller.addTab(elem);
      elem.bind("click", function() {
        controller.clickTab(elem);
      });
    }
  };
});
