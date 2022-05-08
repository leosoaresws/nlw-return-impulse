import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({
  onFeedbackTypeChanged,
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className={`text-xl leading-6`}>
          Deixe o seu feedback
        </span>
        
        <CloseButton />
      </header>

      <div className={`flex py-8 gap-2 w-full`}>
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              className={`
                py-5 w-24 rounded-lg 
                flex flex-1 flex-col items-center 
                gap-2 bg-zinc-800 border-2 border-transparent 
                hover:border-brand-500 
                focus:border-brand-500 focus:outline-none`
              }
            >
              <img 
                src={value.image.source} 
                alt={value.image.alt} 
              />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
