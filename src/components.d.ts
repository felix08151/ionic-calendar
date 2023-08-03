/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppCalendar {
    }
    interface AppCalendarDetail {
        "selectedDate": Date;
    }
    interface AppRoot {
    }
    interface AppTabs {
    }
    interface PageHome {
    }
    interface PageNotice {
    }
    interface PageProfile {
        "name": string;
    }
}
declare global {
    interface HTMLAppCalendarElement extends Components.AppCalendar, HTMLStencilElement {
    }
    var HTMLAppCalendarElement: {
        prototype: HTMLAppCalendarElement;
        new (): HTMLAppCalendarElement;
    };
    interface HTMLAppCalendarDetailElement extends Components.AppCalendarDetail, HTMLStencilElement {
    }
    var HTMLAppCalendarDetailElement: {
        prototype: HTMLAppCalendarDetailElement;
        new (): HTMLAppCalendarDetailElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAppTabsElement extends Components.AppTabs, HTMLStencilElement {
    }
    var HTMLAppTabsElement: {
        prototype: HTMLAppTabsElement;
        new (): HTMLAppTabsElement;
    };
    interface HTMLPageHomeElement extends Components.PageHome, HTMLStencilElement {
    }
    var HTMLPageHomeElement: {
        prototype: HTMLPageHomeElement;
        new (): HTMLPageHomeElement;
    };
    interface HTMLPageNoticeElement extends Components.PageNotice, HTMLStencilElement {
    }
    var HTMLPageNoticeElement: {
        prototype: HTMLPageNoticeElement;
        new (): HTMLPageNoticeElement;
    };
    interface HTMLPageProfileElement extends Components.PageProfile, HTMLStencilElement {
    }
    var HTMLPageProfileElement: {
        prototype: HTMLPageProfileElement;
        new (): HTMLPageProfileElement;
    };
    interface HTMLElementTagNameMap {
        "app-calendar": HTMLAppCalendarElement;
        "app-calendar-detail": HTMLAppCalendarDetailElement;
        "app-root": HTMLAppRootElement;
        "app-tabs": HTMLAppTabsElement;
        "page-home": HTMLPageHomeElement;
        "page-notice": HTMLPageNoticeElement;
        "page-profile": HTMLPageProfileElement;
    }
}
declare namespace LocalJSX {
    interface AppCalendar {
    }
    interface AppCalendarDetail {
        "selectedDate"?: Date;
    }
    interface AppRoot {
    }
    interface AppTabs {
    }
    interface PageHome {
    }
    interface PageNotice {
    }
    interface PageProfile {
        "name"?: string;
    }
    interface IntrinsicElements {
        "app-calendar": AppCalendar;
        "app-calendar-detail": AppCalendarDetail;
        "app-root": AppRoot;
        "app-tabs": AppTabs;
        "page-home": PageHome;
        "page-notice": PageNotice;
        "page-profile": PageProfile;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-calendar": LocalJSX.AppCalendar & JSXBase.HTMLAttributes<HTMLAppCalendarElement>;
            "app-calendar-detail": LocalJSX.AppCalendarDetail & JSXBase.HTMLAttributes<HTMLAppCalendarDetailElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "app-tabs": LocalJSX.AppTabs & JSXBase.HTMLAttributes<HTMLAppTabsElement>;
            "page-home": LocalJSX.PageHome & JSXBase.HTMLAttributes<HTMLPageHomeElement>;
            "page-notice": LocalJSX.PageNotice & JSXBase.HTMLAttributes<HTMLPageNoticeElement>;
            "page-profile": LocalJSX.PageProfile & JSXBase.HTMLAttributes<HTMLPageProfileElement>;
        }
    }
}
