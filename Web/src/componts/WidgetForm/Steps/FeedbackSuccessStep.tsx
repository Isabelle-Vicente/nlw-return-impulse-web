import { CloseButton } from "../../CloseButton";

interface FeedbackSuccessStepProps {
    onFeedbackRestartRequezted: () => void;
}

export function FeedbackSuccessStep({onFeedbackRestartRequezted}: FeedbackSuccessStepProps){
    return(
        <>
        <header>
            <CloseButton />
        </header>

        <div className="flex flex-col items-center py-10 w-[304px]">
        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.78 1.36202C22.624 0.61102 21.076 0.94002 20.322 2.09802L9.43603 18.877L4.40703 14.227C3.39303 13.289 1.81103 13.352 0.874027 14.365C-0.0629734 15.379 -0.000973582 16.961 1.01303 17.898L8.22203 24.564C8.70203 25.009 9.31203 25.229 9.91803 25.229C10.591 25.229 11.452 24.947 12.017 24.09C12.349 23.584 24.517 4.82002 24.517 4.82002C25.268 3.66102 24.938 2.11302 23.78 1.36202Z" fill="white"/>
         </svg>

         <span className="text-xl mt-2">Agradecemos o feedback</span>

         <button
         type="button"
         onClick={onFeedbackRestartRequezted}
          className="py-2 px-6 mt-6 bg-zinc-700 rounded-md borber-transparent text-sm leading-6 houver:bg-zinc-700 transsition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-800 focus:ring-brand-500 "
          
          >
            Quero enviar outro 
          </button>

        </div>
        </>
    )
}


