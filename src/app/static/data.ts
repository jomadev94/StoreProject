import { OverlayRef } from "@angular/cdk/overlay";
import { InjectionToken } from "@angular/core";
import { Tag } from "@models/tag";
import { Image } from "@models/view/image";

export const DATA_IMGS = new InjectionToken<Image>('portal-data');
export const DATA_KEY = new InjectionToken<string>('portal-data');
export const DATA_TITLE = new InjectionToken<string>('portal-data');
export const DATA_ID = new InjectionToken<string>('portal-data');
export const DATA_NUMBER = new InjectionToken<number>('portal-data');
export const DATA_ANY = new InjectionToken<any>('portal-data');
export const DATA_TAG = new InjectionToken<Tag>('portal-data');
export const DATA_OVREF = new InjectionToken<OverlayRef>('portal-data');