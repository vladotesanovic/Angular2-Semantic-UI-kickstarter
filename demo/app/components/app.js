System.register(["angular2/core", "angular2/router", "./home/home", "./elements/loader", "./elements/list", "./elements/segment", "./elements/menu", "./elements/message", "./elements/modal", "./elements/dropdown", "./elements/popup", "./elements/tab", "./elements/button", "./elements/card", "./elements/form", "./elements/sidebar"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, home_1, loader_1, list_1, segment_1, menu_1, message_1, modal_1, dropdown_1, popup_1, tab_1, button_1, card_1, form_1, sidebar_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (loader_1_1) {
                loader_1 = loader_1_1;
            },
            function (list_1_1) {
                list_1 = list_1_1;
            },
            function (segment_1_1) {
                segment_1 = segment_1_1;
            },
            function (menu_1_1) {
                menu_1 = menu_1_1;
            },
            function (message_1_1) {
                message_1 = message_1_1;
            },
            function (modal_1_1) {
                modal_1 = modal_1_1;
            },
            function (dropdown_1_1) {
                dropdown_1 = dropdown_1_1;
            },
            function (popup_1_1) {
                popup_1 = popup_1_1;
            },
            function (tab_1_1) {
                tab_1 = tab_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (card_1_1) {
                card_1 = card_1_1;
            },
            function (form_1_1) {
                form_1 = form_1_1;
            },
            function (sidebar_1_1) {
                sidebar_1 = sidebar_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.ngAfterViewInit = function () {
                    jQuery("#page .full.height").css("height", jQuery(window).height() + "px");
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "app"
                    }),
                    core_1.View({
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: "./app/components/app.html"
                    }),
                    router_1.RouteConfig([
                        { component: home_1.HomeComponent, path: "/", useAsDefault: true },
                        { component: loader_1.LoaderComponent, path: "/elements/loader" },
                        { component: list_1.ListComponent, path: "/elements/list" },
                        { component: form_1.FormComponent, path: "/elements/form" },
                        { component: card_1.CardComponent, path: "/elements/card" },
                        { component: segment_1.SegmentComponent, path: "/elements/segment" },
                        { component: menu_1.MenuComponent, path: "/elements/menu" },
                        { component: message_1.MessageComponent, path: "/elements/message" },
                        { component: modal_1.ModalComponent, path: "/elements/modal" },
                        { component: dropdown_1.DropdownComponent, path: "/elements/dropdown" },
                        { component: popup_1.PopupComponent, path: "/elements/popup" },
                        { component: sidebar_1.SidebarComponent, path: "/elements/sidebar" },
                        { component: tab_1.TabComponent, path: "/elements/tab" },
                        { component: button_1.ButtonComponent, path: "/elements/button" },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTBDQTtnQkFBQTtnQkFJQSxDQUFDO2dCQUhBLHNDQUFlLEdBQWY7b0JBQ0MsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7Z0JBQzVFLENBQUM7Z0JBM0JGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLEtBQUs7cUJBQ2YsQ0FBQztvQkFDRCxXQUFJLENBQUM7d0JBQ0wsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7d0JBQy9CLFdBQVcsRUFBRSwyQkFBMkI7cUJBQ3hDLENBQUM7b0JBQ0Qsb0JBQVcsQ0FBQzt3QkFDWixFQUFFLFNBQVMsRUFBRSxvQkFBYSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRTt3QkFDM0QsRUFBRSxTQUFTLEVBQUUsd0JBQWUsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7d0JBQ3hELEVBQUUsU0FBUyxFQUFFLG9CQUFhLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO3dCQUNwRCxFQUFFLFNBQVMsRUFBRSxvQkFBYSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTt3QkFDcEQsRUFBRSxTQUFTLEVBQUUsb0JBQWEsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7d0JBQ3BELEVBQUUsU0FBUyxFQUFFLDBCQUFnQixFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRTt3QkFDMUQsRUFBRSxTQUFTLEVBQUUsb0JBQWEsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7d0JBQ3BELEVBQUUsU0FBUyxFQUFFLDBCQUFnQixFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRTt3QkFDMUQsRUFBRSxTQUFTLEVBQUUsc0JBQWMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7d0JBQ3RELEVBQUUsU0FBUyxFQUFFLDRCQUFpQixFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRTt3QkFDNUQsRUFBRSxTQUFTLEVBQUUsc0JBQWMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7d0JBQ3RELEVBQUUsU0FBUyxFQUFFLDBCQUFnQixFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRTt3QkFDMUQsRUFBRSxTQUFTLEVBQUUsa0JBQVksRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO3dCQUNsRCxFQUFFLFNBQVMsRUFBRSx3QkFBZSxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRTtxQkFDeEQsQ0FBQzs7Z0NBQUE7Z0JBTUYsbUJBQUM7WUFBRCxDQUFDLEFBSkQsSUFJQztZQUpELHVDQUlDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXcsIEFmdGVyVmlld0luaXQgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlQ29uZmlnIH0gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS9ob21lXCI7XG5pbXBvcnQgeyBMb2FkZXJDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9sb2FkZXJcIjtcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9saXN0XCI7XG5pbXBvcnQgeyBTZWdtZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvc2VnbWVudFwiO1xuaW1wb3J0IHsgTWVudUNvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL21lbnVcIjtcbmltcG9ydCB7IE1lc3NhZ2VDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9tZXNzYWdlXCI7XG5pbXBvcnQgeyBNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL21vZGFsXCI7XG5pbXBvcnQgeyBEcm9wZG93bkNvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL2Ryb3Bkb3duXCI7XG5pbXBvcnQgeyBQb3B1cENvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL3BvcHVwXCI7XG5pbXBvcnQgeyBUYWJDb21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy90YWJcIjtcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL2J1dHRvblwiO1xuaW1wb3J0IHsgQ2FyZENvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnRzL2NhcmRcIjtcbmltcG9ydCB7IEZvcm1Db21wb25lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9mb3JtXCI7XG5pbXBvcnQgeyBTaWRlYmFyQ29tcG9uZW50IH0gZnJvbSBcIi4vZWxlbWVudHMvc2lkZWJhclwiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiYXBwXCJcbn0pXG5AVmlldyh7XG5cdGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG5cdHRlbXBsYXRlVXJsOiBcIi4vYXBwL2NvbXBvbmVudHMvYXBwLmh0bWxcIlxufSlcbkBSb3V0ZUNvbmZpZyhbXG5cdHsgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LCBwYXRoOiBcIi9cIiwgdXNlQXNEZWZhdWx0OiB0cnVlIH0sXG5cdHsgY29tcG9uZW50OiBMb2FkZXJDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL2xvYWRlclwiIH0sXG5cdHsgY29tcG9uZW50OiBMaXN0Q29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9saXN0XCIgfSxcblx0eyBjb21wb25lbnQ6IEZvcm1Db21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL2Zvcm1cIiB9LFxuXHR7IGNvbXBvbmVudDogQ2FyZENvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvY2FyZFwiIH0sXG5cdHsgY29tcG9uZW50OiBTZWdtZW50Q29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9zZWdtZW50XCIgfSxcblx0eyBjb21wb25lbnQ6IE1lbnVDb21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL21lbnVcIiB9LFxuXHR7IGNvbXBvbmVudDogTWVzc2FnZUNvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvbWVzc2FnZVwiIH0sXG5cdHsgY29tcG9uZW50OiBNb2RhbENvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvbW9kYWxcIiB9LFxuXHR7IGNvbXBvbmVudDogRHJvcGRvd25Db21wb25lbnQsIHBhdGg6IFwiL2VsZW1lbnRzL2Ryb3Bkb3duXCIgfSxcblx0eyBjb21wb25lbnQ6IFBvcHVwQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9wb3B1cFwiIH0sXG5cdHsgY29tcG9uZW50OiBTaWRlYmFyQ29tcG9uZW50LCBwYXRoOiBcIi9lbGVtZW50cy9zaWRlYmFyXCIgfSxcblx0eyBjb21wb25lbnQ6IFRhYkNvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvdGFiXCIgfSxcblx0eyBjb21wb25lbnQ6IEJ1dHRvbkNvbXBvbmVudCwgcGF0aDogXCIvZWxlbWVudHMvYnV0dG9uXCIgfSxcbl0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdGpRdWVyeShcIiNwYWdlIC5mdWxsLmhlaWdodFwiKS5jc3MoXCJoZWlnaHRcIiwgalF1ZXJ5KHdpbmRvdykuaGVpZ2h0KCkgKyBcInB4XCIpO1xuXHR9XG59XG4iXX0=