"use client";

import { useRef, useState } from "react";
import { X } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { cn } from "@/lib/utils";
import { galleryFilters, galleryItems } from "@/data/gallery-items";
import type { GalleryCategory, GalleryItem } from "@/types";

type FilterValue = GalleryCategory | "All";

export function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("All");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const filtered =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  function openItem(item: GalleryItem) {
    setActiveItem(item);
    dialogRef.current?.showModal();
  }

  function closeDialog() {
    dialogRef.current?.close();
    setActiveItem(null);
  }

  return (
    <div>
      <div role="group" aria-label="Filter gallery by category" className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveFilter("All")}
          aria-pressed={activeFilter === "All"}
          className={cn(
            "rounded-sm border px-4 py-2 text-sm font-medium transition-colors",
            activeFilter === "All"
              ? "border-charcoal bg-charcoal text-white"
              : "border-stone bg-white text-charcoal hover:border-charcoal"
          )}
        >
          All
        </button>
        {galleryFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
            className={cn(
              "rounded-sm border px-4 py-2 text-sm font-medium transition-colors",
              activeFilter === filter
                ? "border-charcoal bg-charcoal text-white"
                : "border-stone bg-white text-charcoal hover:border-charcoal"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 rounded-sm border border-dashed border-stone bg-cream p-8 text-center text-taupe">
          No photographs are available in this category yet. Please check
          back soon or explore another category.
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => openItem(item)}
              className="group text-left focus-visible:outline-2 focus-visible:outline-sage rounded-sm"
              aria-haspopup="dialog"
            >
              <ImagePlaceholder alt={item.imageAlt} src={item.image} aspect="square" label={item.title} />
              <p className="mt-2 text-sm text-taupe">{item.caption}</p>
            </button>
          ))}
        </div>
      )}

      <dialog
        ref={dialogRef}
        onClose={() => setActiveItem(null)}
        aria-label={activeItem ? activeItem.title : "Gallery image"}
        className="w-full max-w-2xl rounded-sm border border-stone bg-cream p-0 backdrop:bg-charcoal/70 open:animate-none"
      >
        {activeItem && (
          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-xl font-medium text-charcoal">{activeItem.title}</h2>
              <button
                type="button"
                onClick={closeDialog}
                aria-label="Close image"
                className="flex size-9 shrink-0 items-center justify-center rounded-sm text-charcoal hover:bg-charcoal/5 focus-visible:outline-2 focus-visible:outline-sage"
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </div>
            <ImagePlaceholder
              alt={activeItem.imageAlt}
              src={activeItem.image}
              aspect="video"
              label={activeItem.title}
              className="mt-4"
            />
            <p className="mt-4 text-[15px] text-taupe leading-relaxed">{activeItem.caption}</p>
          </div>
        )}
      </dialog>
    </div>
  );
}
