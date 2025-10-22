import React from 'react';

/**
 * A sticky call-to-action bar shown only on small screens.
 */
export default function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 md:hidden">
      <div className="mx-auto max-w-screen-sm px-4 py-3 flex items-center justify-between gap-3">
        <div className="text-sm">
          <div className="font-medium">Preventa $1,900 MXN</div>
          <div className="text-neutral-600 dark:text-neutral-400 text-xs">Cupos limitados</div>
        </div>
        <a href="#reserva" className="inline-flex items-center rounded-md px-4 py-2 bg-primary text-white font-medium">
          Reservar ahora
        </a>
      </div>
    </div>
  );
}