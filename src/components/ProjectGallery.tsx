import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Minus, Plus, RotateCcw, X } from "lucide-react";
import type { GalleryImage } from "../utils/imageLoader";

interface ProjectGalleryProps {
	items: GalleryImage[];
	title: string;
}

export function ProjectGallery({ items, title }: ProjectGalleryProps) {
	const [activeIndex, setActiveIndex] = useState(0);
	const [viewerOpen, setViewerOpen] = useState(false);
	const [zoom, setZoom] = useState(1);
	const active = items[activeIndex];
	const move = (step: number) => {
		setActiveIndex((index) => (index + step + items.length) % items.length);
		setZoom(1);
	};
	const openViewer = (index = activeIndex) => {
		setActiveIndex(index);
		setZoom(1);
		setViewerOpen(true);
	};
	const closeViewer = () => setViewerOpen(false);
	const changeZoom = (amount: number) => setZoom((current) => Math.min(4, Math.max(1, current + amount)));

	useEffect(() => {
		if (!viewerOpen) return;
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") closeViewer();
			if (event.key === "ArrowLeft" && items.length > 1) move(-1);
			if (event.key === "ArrowRight" && items.length > 1) move(1);
		};
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", onKeyDown);
		return () => {
			document.body.style.overflow = previousOverflow;
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [viewerOpen, items.length]);

	if (items.length === 0) return <p className="gallery-empty">Project media will be added soon.</p>;
	return <>
		<div className="project-gallery">
			<div className="gallery-stage">
				<button type="button" className="gallery-open" onClick={() => openViewer()} aria-label={`Open ${title} ${active.isVideo ? "video" : "image"} in viewer`}>
					{active.isVideo ? <video key={active.original} src={active.original} muted playsInline preload="metadata" aria-hidden="true" /> : <img src={active.original} alt={`${title} screenshot ${activeIndex + 1}`} />}
					<span>{active.isVideo ? "Open video" : "Click to zoom"}</span>
				</button>
				{items.length > 1 && <><button type="button" className="gallery-arrow gallery-prev" onClick={() => move(-1)} aria-label="Previous media"><ChevronLeft /></button><button type="button" className="gallery-arrow gallery-next" onClick={() => move(1)} aria-label="Next media"><ChevronRight /></button></>}
			</div>
			<div className="gallery-caption">{active.isVideo ? "Video" : "Screenshot"} {activeIndex + 1} of {items.length}</div>
			{items.length > 1 && <div className="gallery-thumbnails" aria-label="Choose project media">{items.map((item, index) => <button type="button" key={item.original} onClick={() => { setActiveIndex(index); setZoom(1); }} className={`gallery-thumb ${index === activeIndex ? "is-active" : ""}`} aria-label={`Show ${item.isVideo ? "video" : "screenshot"} ${index + 1}`} aria-pressed={index === activeIndex}>
				{item.isVideo ? <><video src={item.original} muted preload="metadata" aria-hidden="true" /><span>Video</span></> : <img src={item.thumbnail} alt="" loading="lazy" />}
			</button>)}</div>}
		</div>
		{viewerOpen && <div className="media-viewer" role="dialog" aria-modal="true" aria-label={`${title} media viewer`} onClick={(event) => { if (event.target === event.currentTarget) closeViewer(); }}>
			<div className="viewer-toolbar"><span>{title} · {active.isVideo ? "Video" : `Image ${activeIndex + 1} of ${items.length}`}</span><div className="viewer-controls">
				{!active.isVideo && <><button type="button" onClick={() => changeZoom(-0.25)} disabled={zoom <= 1} aria-label="Zoom out"><Minus /></button><span className="zoom-level">{Math.round(zoom * 100)}%</span><button type="button" onClick={() => changeZoom(0.25)} disabled={zoom >= 4} aria-label="Zoom in"><Plus /></button><button type="button" onClick={() => setZoom(1)} disabled={zoom === 1} aria-label="Reset zoom"><RotateCcw /></button></>}
				<button type="button" onClick={closeViewer} aria-label="Close viewer"><X /></button>
			</div></div>
			<div className="viewer-stage" onWheel={(event) => { if (!active.isVideo) { event.preventDefault(); changeZoom(event.deltaY < 0 ? 0.15 : -0.15); } }}>
				{active.isVideo ? <video key={active.original} src={active.original} controls autoPlay playsInline /> : <img src={active.original} alt={`${title} screenshot ${activeIndex + 1}`} style={{ transform: `scale(${zoom})` }} />}
				{items.length > 1 && <><button type="button" className="gallery-arrow viewer-prev" onClick={() => move(-1)} aria-label="Previous media"><ChevronLeft /></button><button type="button" className="gallery-arrow viewer-next" onClick={() => move(1)} aria-label="Next media"><ChevronRight /></button></>}
			</div>
			{!active.isVideo && <p className="viewer-hint">Scroll to zoom · use + / − buttons to adjust</p>}
		</div>}
	</>;
}
