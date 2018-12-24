// Type definitions for MarkerClustererPlus for Google Maps V3 2.1
// Project: https://github.com/mahnunchik/markerclustererplus
// Definitions by: Mathias Rodriguez <https://github.com/enanox>
//                 Michael Ledin <https://github.com/mxl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2


interface ClusterIconStyle {
    url: string;
    height: number;
    width: number;
    anchorText?: number[];
    anchorIcon?: number[];
    textColor?: string;
    textSize?: number;
    textDecoration?: string;
    fontWeight?: string;
    fontStyle?: string;
    fontFamily?: string;
    backgroundPosition?: string;
}

interface ClusterIconInfo {
    text: string;
    index: number;
    title: string;
}

declare class ClusterIcon extends google.maps.OverlayView {
  
    constructor(cluster: Cluster, styles: ClusterIconStyle[]);
    onAdd(): void;
    onRemove(): void;
    draw(): void;
    hide(): void;
    show(): void;
    useStyle(style: ClusterIconInfo): void;
    setCenter(center: google.maps.LatLng): void;
    createCss(pos: google.maps.Point): string;
    getPosFromLatLng_(latLng: google.maps.LatLng): google.maps.Point;
}

declare class Cluster {

    constructor(mc: MarkerClusterer);

    getSize(): number;
    getMarkers(): google.maps.Marker[];
    getCenter(): google.maps.LatLng;
    getMap(): google.maps.Map;
    getMarkerClusterer(): MarkerClusterer;
    getBounds(): google.maps.LatLngBounds;
    remove(): void;
    addMarker(marker: google.maps.Marker): boolean;
    isMarkerInClusterBounds(marker: google.maps.Marker): boolean;
    calculateBounds_(): void;
    updateIcon_(): void;
    isMarkerAlreadyAdded_(marker: google.maps.Marker): boolean;
}

type Calculator = (markers: google.maps.Marker[], clusterIconStylesCount: number) => ClusterIconInfo;

interface MarkerClustererOptions {

    gridSize?: number;
    maxZoom?: number;
    zoomOnClick?: boolean;
    averageCenter?: boolean;
    minimumClusterSize?: number;
    ignoreHidden?: boolean;
    title?: string;
    calculator?: Calculator;
    clusterClass?: string;
    styles?: ClusterIconStyle[];
    enableRetinaIcons?: boolean;
    batchSize?: number;
    batchSizeIE?: number;
    imagePath?: string;
    imageExtension?: string;
    imageSizes?: number[];
}

declare class MarkerClusterer extends google.maps.OverlayView {

    constructor(map: google.maps.Map, markers?: google.maps.Marker[], options?: MarkerClustererOptions);
    onAdd(): void;
    onRemove(): void;
    draw(): void;
    setupStyles_(): void;
    fitMapToMarkers(): void;
    getGridSize(): number;
    setGridSize(gridSize: number): void;
    getMinimumClusterSize(): number;
    setMinimumClusterSize(minimumClusterSize: number): void;
    getMaxZoom(): number;
    setMaxZoom(maxZoom: number): void;
    getStyles(): ClusterIconStyle[];
    setStyles(styles: ClusterIconStyle[]): void;
    getTitle(): string;
    setTitle(title: string): void;
    getZoomOnClick(): boolean;
    setZoomOnClick(zoomOnClick: boolean): void;
    getAverageCenter(): boolean;
    setAverageCenter(averageCenter: boolean): void;
    getIgnoreHidden(): boolean;
    setIgnoreHidden(ignoreHidden: boolean): void;
    getEnableRetinaIcons(): boolean;
    setEnableRetinaIcons(enableRetinaIcons: boolean): void;
    getImageExtension(): string;
    setImageExtension(imageExtension: string): void;
    getImagePath(): string;
    setImagePath(imagePath: string): void;
    getImageSizes(): number[];
    setImageSizes(imageSizes: number[]): void;
    getCalculator(): Calculator;
    setCalculator(calculator: Calculator): void;
    setHideLabel(printable: boolean): void;
    getHideLabel(): boolean;
    getBatchSizeIE(): number;
    setBatchSizeIE(batchSizeIE: number): void;
    getClusterClass(): string;
    setClusterClass(clusterClass: string): void;
    getMarkers(): google.maps.Marker[];
    getTotalMarkers(): number;
    getClusters(): Cluster[];
    getTotalClusters(): number;
    addMarker(marker: google.maps.Marker, noDraw?: boolean): void;
    addMarkers(markers: google.maps.Marker[], noDraw?: boolean): void;
    pushMarkerTo_(marker: google.maps.Marker): void;
    removeMarker(marker: google.maps.Marker, noDraw?: boolean, noMapRemove?: boolean): boolean;
    removeMarkers(markers: google.maps.Marker[], noDraw?: boolean, noMapRemove?: boolean): boolean;
    removeMarker_(marker: google.maps.Marker, removeFromMap?: boolean): boolean;
    clearMarkers(): void;
    repaint(): void;
    getExtendedBounds(bounds: google.maps.LatLngBounds): google.maps.LatLngBounds;
    redraw_(): void;
    resetViewport_(hide?: boolean): void;
    distanceBetweenPoints_(p1: google.maps.LatLng, p2: google.maps.LatLng): number;
    isMarkerInBounds_(marker: google.maps.Marker, bounds: google.maps.LatLngBounds): boolean;
    addToClosestCluster_(marker: google.maps.Marker): void;
    createClusters_(iFirst: number): void;
    extend(obj1: object, obj2: object): object;

    static CALCULATOR: Calculator;
    static BATCH_SIZE: number;
    static BATCH_SIZE_IE: number;
    static IMAGE_PATH: string;
    static IMAGE_EXTENSION: string;
    static IMAGE_SIZES: number[];
}

interface String {
    trim(): string;
}
