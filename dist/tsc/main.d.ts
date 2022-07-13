interface MRAID1 {
    getVersion(): MRAIDVersion;
    addEventListener<K extends keyof MRAIDEventHandlers>(name: string, eventHandler: MRAIDEventHandlers[K]): void;
    removeEventListener<K extends keyof MRAIDEventHandlers>(name: string, eventHandler?: MRAIDEventHandlers[K]): void;
    getState(): MRAIDState;
    open(url: string): void;
    close(): void;
    expand(url?: string): void;
    getExpandProperties(): MRAIDExpandProperties;
    setExpandProperties(newValues: Partial<MRAIDExpandProperties>): void;
    getPlacementType(): MRAIDPlacementType;
    playVideo(url: string): void;
    useCustomClose(newValue: boolean): void;
    isViewable(): boolean;
}
interface MRAID2 extends MRAID1 {
    supports(feature: MRAIDFeature): boolean;
    resize(): void;
    storePicture(url: string): void;
    createCalendarEvent(parameters: MRAIDCalendarEvent): void;
    getOrientationProperties(): MRAIDOrientationProperties;
    setOrientationProperties(newValues: Partial<MRAIDOrientationProperties>): void;
    getCurrentPosition(): MRAIDRect;
    getDefaultPosition(): MRAIDRect;
    getMaxSize(): MRAIDSize;
    getScreenSize(): MRAIDSize;
    getResizeProperties(): MRAIDExpandProperties;
    setResizeProperties(newValues: Partial<MRAIDExpandProperties>): void;
}
interface MRAID2VideoAddendum extends MRAID2 {
    initVpaid(vpaidObject: MRAIDVPAIDObject): void;
}
interface MRAID3 extends MRAID2 {
    unload(): void;
    getCurrentAppOrientation(): MRAIDAppOrientationState;
    getLocation(): MRAIDLocationState | undefined;
}
declare type MRAID = MRAID1 | MRAID2 | MRAID2VideoAddendum | MRAID3;
declare type MRAIDVersion = "1.0" | "2.0" | "3.0";
declare type MRAIDENVDeclaration = Readonly<{
    version: MRAIDVersion;
    sdk?: string;
    sdkVersion?: string;
    appId?: string;
    ifa?: string;
    limitAdTracking?: boolean;
    coppa?: boolean;
}>;
interface MRAIDEventHandlers {
    error: (message: string, action: keyof MRAID) => void;
    ready: () => void;
    stateChange: (state: MRAIDState) => void;
    sizeChange: (width: number, height: number) => void;
    viewableChange: (isViewable: boolean) => void;
    exposureChange: (exposedPercentage: number, visibleRectangle: MRAIDRect, occlusionRectangles: MRAIDRect[] | null) => void;
    audioVolumeChange: (newPercentage: number) => void;
    adAction: (action: keyof MRAID) => void;
}
declare type MRAIDFeature = "sms" | "tel" | "calendar" | "storePicture" | "inlineVideo" | "vpaid" | "location";
declare type MRAIDPlacementType = "inline" | "interstitial";
declare type MRAIDState = "loading" | "default" | "expanded" | "resized" | "hidden";
declare type MRAIDOrientation = "portrait" | "landscape";
interface MRAIDOrientationProperties {
    allowOrientationChange: boolean;
    forceOrientation: MRAIDOrientation | "none";
}
interface MRAIDAppOrientationState {
    orientation: MRAIDOrientation;
    locked: boolean;
}
interface MRAIDPosition {
    x: number;
    y: number;
}
interface MRAIDSize {
    width: number;
    height: number;
}
declare type MRAIDRect = MRAIDPosition & MRAIDSize;
declare type MRAIDExpandProperties = MRAIDSize & {
    useCustomClose: boolean;
    readonly isModal: boolean;
};
declare type MRAIDResizeProperties = MRAIDSize & {
    width: number;
    height: number;
    allowOffscreen: boolean;
    customClosePosition?: "top-left" | "top-right" | "bottom-right" | "bottom-left";
};
declare const enum MRAIDLocationType {
    LocationServices = 1,
    IPGeoLocation = 2,
    UserProvided = 3
}
interface MRAIDLocationState {
    lat: number;
    lon: number;
    type: MRAIDLocationType;
    accuracy: number | undefined;
    lastfix: number;
    ipservice: string | undefined;
}
declare type MRAIDCalendarEvent = {
    id?: string;
    description: string;
    location?: string;
    summary?: string;
    start: string;
    end?: string;
    status?: string;
    transparency?: string;
    recurrence?: any;
    reminder?: string;
};
declare type MRAIDVPAIDObject = {
    [key: string]: any;
} & {
    subscribe<K extends keyof MRAIDVPAIDEventHandlers>(fn: MRAIDVPAIDEventHandlers[K], event: string, listenerScope?: any): void;
    unsubscribe<K extends keyof MRAIDVPAIDEventHandlers>(fn: MRAIDVPAIDEventHandlers[K], event: string): void;
    startAd(): void;
    getAdDuration(): number;
    getAdRemainingTime(): number;
};
interface MRAIDVPAIDEventHandlers {
    AdClickThru: (url: string, id: string, playerHandles: boolean) => void;
    AdError: (message: string) => void;
    AdImpression: () => void;
    AdPaused: () => void;
    AdPlaying: () => void;
    AdVideoStart: () => void;
    AdVideoFirstQuartile: () => void;
    AdVideoMidpoint: () => void;
    AdVideoThirdQuartile: () => void;
    AdVideoComplete: () => void;
}
export { MRAID1, MRAID2, MRAID3, MRAIDENVDeclaration, MRAID2VideoAddendum, MRAIDVersion, MRAIDEventHandlers, MRAIDFeature, MRAIDPlacementType, MRAIDState, MRAIDOrientation, MRAIDOrientationProperties, MRAIDAppOrientationState, MRAIDPosition, MRAIDSize, MRAIDRect, MRAIDExpandProperties, MRAIDResizeProperties, MRAIDLocationType, MRAIDLocationState, MRAIDCalendarEvent, MRAIDVPAIDObject, MRAIDVPAIDEventHandlers, };
