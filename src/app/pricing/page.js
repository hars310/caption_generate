import PageHeaders from "@/components/PageHeaders";

export default function PricingPage() {
  return (
    <div>
      <PageHeaders
        h1Text={'Check out our pricing'}
        h2Text={'Our pricing is very simple'} />

      <div className="bg-white text-slate-700 rounded-lg max-w-[50%] mx-auto mb-28 p-2 text-center">
        <h3 className="font-bold text-3xl">Free</h3>
        <h4>Free forever</h4>
      </div>
    </div>
  );
}