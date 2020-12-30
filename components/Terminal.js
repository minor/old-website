import Typing from './Typing'

export default function Terminal() {
  return (
    <div class="w-full">
        <div class="coding inverse-toggle px-5 pt-4 h-terminal sm:h-80 shadow-lg text-gray-100 text-base font-mono subpixel-antialiased bg-gray-800 pb-6 rounded-lg leading-normal overflow-hidden">
            <div class="top mb-2 flex">
                <div class="h-3 w-3 bg-red-500 rounded-full"></div>
                <div class="ml-2 h-3 w-3 bg-yellow-400 rounded-full"></div>
                <div class="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
                <div class="mx-auto pr-16"><p class="text-center text-sm">~oh-my-zsh~</p></div>
            </div>
            <div class="mt-4 flex">
                <p>
                    <span class="text-red-400">saurish</span>&nbsp;<span class="text-yellow-400">@</span>&nbsp;<span class="text-purple-300">/home/saurish/</span>&gt;<span class="text-green-400">$</span>&nbsp;
                    <Typing />
                </p>
            </div>
        </div>
    </div>
  );
}