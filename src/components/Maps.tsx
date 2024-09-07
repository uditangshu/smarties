import TrafficMap from "./TrafficMap"
export default function ()
{
    return (
        <div className="flex justify-between w-full">
      <div className="text-bold">
        hi there
      </div>
      <div className="text-bold w-[600px] rounded-full">
        niche pata nhi konsa map..but dekh ke maza aa rha hai
        <TrafficMap/>
      </div>
      <div className="text-bold">
        hi there
      </div>
    </div>
    )
}