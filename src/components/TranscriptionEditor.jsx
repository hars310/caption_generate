import TranscriptionItem from "@/components/TranscriptionItem";

export default function TranscriptionEditor({
  awsTranscriptionItems,
  setAwsTranscriptionItems,
}) {

  function updateTranscriptionItem(index, prop, ev) {
    const newAwsItems = [...awsTranscriptionItems];
    const newItem = {...newAwsItems[index]};
    newItem[prop] = ev.target.value;
    newAwsItems[index] = newItem;
    setAwsTranscriptionItems(newAwsItems);
  }

  return (
    <div className="w-[100%] ">
        <div className="my-1 w-full grid grid-cols-3 px-4 gap-2  ">
        <div className="bg-green-500 flex justify-start w-full  p-2  rounded-md">From</div>
        <div className="bg-green-500 flex justify-start  p-2 rounded-md">End</div>
        <div className="bg-green-500 flex justify-start  p-2 rounded-md">Content</div>
      </div>
      {awsTranscriptionItems.length > 0 && (
        <div className="h-96 md:h-96 overflow-y-scroll sm:overflow-y-scroll">
          {awsTranscriptionItems.map((item,key) => (
            <div key={key} className="">
              <TranscriptionItem
                handleStartTimeChange={ev => updateTranscriptionItem(key, 'start_time', ev)}
                handleEndTimeChange={ev => updateTranscriptionItem(key, 'end_time', ev)}
                handleContentChange={ev => updateTranscriptionItem(key, 'content', ev)}
                item={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}