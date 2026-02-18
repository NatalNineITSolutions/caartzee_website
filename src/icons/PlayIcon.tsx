import { cn } from '@/utils/cn';

const PlayIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={cn('size-full text-white', className)}>
        <path d="M8 5v14l11-7z" />
    </svg>
);

export default PlayIcon;
