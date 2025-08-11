import * as React from "react"
import { CommitsGrid } from "@/components/ui/commits-grid"
import { cn } from "@/lib/utils";

const phrases = ["Hello", "I am", "yanouk"];

const CommitsGridDemo = ({ className }: { className?: string }) => {
    const [currentPhraseIndex, setCurrentPhraseIndex] = React.useState(0);
    const [displayedText, setDisplayedText] = React.useState("");
    const [isDeleting, setIsDeleting] = React.useState(false);
    const [isPaused, setIsPaused] = React.useState(false); // New state for pause
    const typingSpeed = 200;
    const deletingSpeed = 150;
    const delayBetweenPhrases = 1500;
    const delayAfterDeletion = 1000; // New delay for loop

    React.useEffect(() => {
        let timer: NodeJS.Timeout;
        const currentPhrase = phrases[currentPhraseIndex];

        if (isPaused) {
            timer = setTimeout(() => {
                setIsPaused(false);
                setCurrentPhraseIndex(prev => (prev + 1) % phrases.length);
            }, delayAfterDeletion);
        } else if (isDeleting) {
            timer = setTimeout(() => {
                setDisplayedText(prev => prev.substring(0, prev.length - 1));
            }, deletingSpeed);
        } else {
            timer = setTimeout(() => {
                setDisplayedText(prev => currentPhrase.substring(0, prev.length + 1));
            }, typingSpeed);
        }

        if (!isDeleting && displayedText === currentPhrase) {
            clearTimeout(timer);
            timer = setTimeout(() => setIsDeleting(true), delayBetweenPhrases);
        } else if (isDeleting && displayedText === "") {
            setIsDeleting(false);
            setIsPaused(true); // Pause after deletion
        }

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, isPaused, currentPhraseIndex]); // Add isPaused to dependencies

    const maxWidth = Math.max(...phrases.map(phrase => phrase.length)) * 6 + 1;

    return <CommitsGrid text={displayedText} className={cn(className)} fixedWidth={maxWidth} />
}

export { CommitsGridDemo }
