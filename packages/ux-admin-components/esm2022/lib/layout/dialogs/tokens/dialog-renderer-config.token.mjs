import { InjectionToken, ViewEncapsulation, } from '@angular/core';
/**
 * @deprecated Use new layout components as GlobalPanel, Panel, PopUp and Snackbar
 * This will be removed in the next major version.
 */
export const DIALOG_RENDERER_CONFIG_TOKEN = new InjectionToken('Dialog renderer', {
    providedIn: 'root',
    factory: () => ({
        id: 'dialog-' + Math.round(Math.random() * 1000) + '-id',
        encapsulation: ViewEncapsulation.Emulated,
        styles: [
            `
      .backdrop {
        --_animation-duration: 0s;
        margin: 0;
        padding: 0;
        border: none;
        z-index: 120;
        position: fixed;
      }

      .backdrop.modal {
        inset: 0;
        background: rgba(0,0,0,.5);
      }

      .backdrop.drawer {
        display: flex;
        justify-content: flex-end;
      }

      .backdrop.confirm {
        display: grid;
        place-content: center;
      }

      [role="dialog"]:not([open]) {
        display: none;
      }
      .mat-datepicker-content-container[role="dialog"]:not([open]) {
	      display: block;
      }
      .drawer > [role="dialog"][open] {
        animation: slide-in var(--_animation-duration) forwards ease-in;
      }
      .drawer > [role="dialog"][closing] {
        pointer-events: none;
        animation: slide-out var(--_animation-duration) forwards ease-out;
      }

      .confirm > .dialog[role="dialog"][open] {
        animation: fade-in var(--_animation-duration) forwards ease-in;
      }
      .confirm > [role="dialog"][closing] {
        pointer-events: none;
        animation: fade-out var(--_animation-duration) forwards ease-out;
      }

      @media (prefers-reduced-motion: no-preference) {
        .backdrop.drawer {
          --_animation-duration: .5s
        }
        .backdrop.confirm {
          --_animation-duration: .25s
        }
      }

      @keyframes fade-in {
        to {
          opacity: 1;
        }
        from {
          opacity: 0;
        }
      }
      @keyframes fade-out {
        to {
          opacity: 0;
        }
        from {
          opacity: 1;
        }
      }

      @keyframes slide-in {
        from {
          translate: 100%;
        }
        to {
          translate: 00%;
        }
      }
      @keyframes slide-out {
        to {
          translate: 100%;
        }
        from {
          translate: 0%;
        }
      }
      `,
        ],
        data: {},
    }),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLXJlbmRlcmVyLWNvbmZpZy50b2tlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FkbWluLWNvbXBvbmVudHMvc3JjL2xpYi9sYXlvdXQvZGlhbG9ncy90b2tlbnMvZGlhbG9nLXJlbmRlcmVyLWNvbmZpZy50b2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsY0FBYyxFQUVkLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2Qjs7O0dBR0c7QUFDSCxNQUFNLENBQUMsTUFBTSw0QkFBNEIsR0FBRyxJQUFJLGNBQWMsQ0FDN0QsaUJBQWlCLEVBQ2pCO0lBQ0MsVUFBVSxFQUFFLE1BQU07SUFDbEIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDZixFQUFFLEVBQUUsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEtBQUs7UUFDeEQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLFFBQVE7UUFDekMsTUFBTSxFQUFFO1lBQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BeUZHO1NBQ0g7UUFDRCxJQUFJLEVBQUUsRUFBRTtLQUNSLENBQUM7Q0FDRixDQUNELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3Rpb25Ub2tlbixcbiAgUmVuZGVyZXJUeXBlMixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSBuZXcgbGF5b3V0IGNvbXBvbmVudHMgYXMgR2xvYmFsUGFuZWwsIFBhbmVsLCBQb3BVcCBhbmQgU25hY2tiYXJcbiAqIFRoaXMgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24uXG4gKi9cbmV4cG9ydCBjb25zdCBESUFMT0dfUkVOREVSRVJfQ09ORklHX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPFJlbmRlcmVyVHlwZTI+KFxuXHQnRGlhbG9nIHJlbmRlcmVyJyxcblx0e1xuXHRcdHByb3ZpZGVkSW46ICdyb290Jyxcblx0XHRmYWN0b3J5OiAoKSA9PiAoe1xuXHRcdFx0aWQ6ICdkaWFsb2ctJyArIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDApICsgJy1pZCcsXG5cdFx0XHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZCxcblx0XHRcdHN0eWxlczogW1xuXHRcdFx0XHRgXG4gICAgICAuYmFja2Ryb3Age1xuICAgICAgICAtLV9hbmltYXRpb24tZHVyYXRpb246IDBzO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgei1pbmRleDogMTIwO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB9XG5cbiAgICAgIC5iYWNrZHJvcC5tb2RhbCB7XG4gICAgICAgIGluc2V0OiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC41KTtcbiAgICAgIH1cblxuICAgICAgLmJhY2tkcm9wLmRyYXdlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICB9XG5cbiAgICAgIC5iYWNrZHJvcC5jb25maXJtIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBbcm9sZT1cImRpYWxvZ1wiXTpub3QoW29wZW5dKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgICAubWF0LWRhdGVwaWNrZXItY29udGVudC1jb250YWluZXJbcm9sZT1cImRpYWxvZ1wiXTpub3QoW29wZW5dKSB7XG5cdCAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICAgLmRyYXdlciA+IFtyb2xlPVwiZGlhbG9nXCJdW29wZW5dIHtcbiAgICAgICAgYW5pbWF0aW9uOiBzbGlkZS1pbiB2YXIoLS1fYW5pbWF0aW9uLWR1cmF0aW9uKSBmb3J3YXJkcyBlYXNlLWluO1xuICAgICAgfVxuICAgICAgLmRyYXdlciA+IFtyb2xlPVwiZGlhbG9nXCJdW2Nsb3NpbmddIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIGFuaW1hdGlvbjogc2xpZGUtb3V0IHZhcigtLV9hbmltYXRpb24tZHVyYXRpb24pIGZvcndhcmRzIGVhc2Utb3V0O1xuICAgICAgfVxuXG4gICAgICAuY29uZmlybSA+IC5kaWFsb2dbcm9sZT1cImRpYWxvZ1wiXVtvcGVuXSB7XG4gICAgICAgIGFuaW1hdGlvbjogZmFkZS1pbiB2YXIoLS1fYW5pbWF0aW9uLWR1cmF0aW9uKSBmb3J3YXJkcyBlYXNlLWluO1xuICAgICAgfVxuICAgICAgLmNvbmZpcm0gPiBbcm9sZT1cImRpYWxvZ1wiXVtjbG9zaW5nXSB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBhbmltYXRpb246IGZhZGUtb3V0IHZhcigtLV9hbmltYXRpb24tZHVyYXRpb24pIGZvcndhcmRzIGVhc2Utb3V0O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IG5vLXByZWZlcmVuY2UpIHtcbiAgICAgICAgLmJhY2tkcm9wLmRyYXdlciB7XG4gICAgICAgICAgLS1fYW5pbWF0aW9uLWR1cmF0aW9uOiAuNXNcbiAgICAgICAgfVxuICAgICAgICAuYmFja2Ryb3AuY29uZmlybSB7XG4gICAgICAgICAgLS1fYW5pbWF0aW9uLWR1cmF0aW9uOiAuMjVzXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyBmYWRlLWluIHtcbiAgICAgICAgdG8ge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgICAgZnJvbSB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQGtleWZyYW1lcyBmYWRlLW91dCB7XG4gICAgICAgIHRvIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIGZyb20ge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyBzbGlkZS1pbiB7XG4gICAgICAgIGZyb20ge1xuICAgICAgICAgIHRyYW5zbGF0ZTogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICB0byB7XG4gICAgICAgICAgdHJhbnNsYXRlOiAwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBrZXlmcmFtZXMgc2xpZGUtb3V0IHtcbiAgICAgICAgdG8ge1xuICAgICAgICAgIHRyYW5zbGF0ZTogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBmcm9tIHtcbiAgICAgICAgICB0cmFuc2xhdGU6IDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBgLFxuXHRcdFx0XSxcblx0XHRcdGRhdGE6IHt9LFxuXHRcdH0pLFxuXHR9XG4pO1xuIl19