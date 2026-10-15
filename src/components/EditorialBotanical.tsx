/**
 * Abstract botanical illustration for the editorial Essenza concept.
 * Purely decorative: no personal portrait, external asset or tracking request.
 */
export default function EditorialBotanical() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-[440px] lg:max-w-none">
      <div className="relative aspect-[4/4.5] overflow-hidden rounded-t-full rounded-b-[46%] border border-editorial-line bg-editorial-mist">
        <div className="pointer-events-none absolute inset-[11%] rounded-t-full rounded-b-[44%] border border-brand-primary/15" />
        <svg
          viewBox="0 0 440 500"
          className="absolute inset-0 h-full w-full text-brand-primary"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M101 456C161 360 195 285 215 215C229 170 256 111 300 60" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" opacity=".68" />
          <path d="M175 311C122 291 97 260 78 218M192 275C253 264 283 238 314 198M214 217C167 195 136 158 132 118M245 144C290 151 326 134 352 103" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity=".55" />
          <g fill="currentColor" fillOpacity=".2" stroke="currentColor" strokeOpacity=".75" strokeWidth="1.4">
            <path d="M78 218C40 207 36 170 41 139C83 149 102 182 78 218Z" />
            <path d="M111 250C78 239 64 206 63 177C100 183 128 213 111 250Z" />
            <path d="M314 198C354 176 368 142 371 116C324 126 305 160 314 198Z" />
            <path d="M273 229C315 219 346 189 352 164C305 171 277 192 273 229Z" />
            <path d="M132 118C102 97 88 64 95 37C130 48 151 81 132 118Z" />
            <path d="M178 172C204 127 190 88 172 70C151 98 149 137 178 172Z" />
            <path d="M352 103C382 68 389 37 382 18C344 35 331 72 352 103Z" />
            <path d="M286 91C316 58 312 29 297 14C270 36 261 65 286 91Z" />
            <path d="M159 362C110 369 75 394 61 423C112 429 148 405 159 362Z" />
            <path d="M187 284C235 290 258 317 266 346C221 343 190 324 187 284Z" />
          </g>
          <circle cx="300" cy="60" r="4" fill="currentColor" fillOpacity=".38" />
        </svg>
      </div>
      <p className="mt-4 text-center font-display text-lg italic text-brand-primary">
        Uno spazio di conoscenza e riflessione
      </p>
    </div>
  );
}
