import { Add } from "@carbon/icons-react";

export default function StripeUpper() {
    return (
        <div className="w-screen px-1 py-2 flex justify-end">
            <button className="flex gap-y-1 p-2 bg-orange-200 rounded border-2 border-orange-500 text-blue-900">
                <Add size={24}/>
                <p>Add new</p>
            </button>
        </div>
    )
}