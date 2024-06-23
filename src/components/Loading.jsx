
const Loading = () => {
  return (
    <svg className="w-[6em] h-[6em]" viewBox="0 0 240 240">
      <circle 
        className="animate-[ringA_2s_linear_infinite] stroke-[#f42f25]"
        cx="120" 
        cy="120" 
        r="105" 
        fill="none" 
        strokeWidth="20" 
        strokeDasharray="0 660" 
        strokeDashoffset="-330" 
        strokeLinecap="round"
      />
      <circle 
        className="animate-[ringB_2s_linear_infinite] stroke-[#f49725]"
        cx="120" 
        cy="120" 
        r="35" 
        fill="none" 
        strokeWidth="20" 
        strokeDasharray="0 220" 
        strokeDashoffset="-110" 
        strokeLinecap="round"
      />
      <circle 
        className="animate-[ringC_2s_linear_infinite] stroke-[#255ff4]"
        cx="85" 
        cy="120" 
        r="70" 
        fill="none" 
        strokeWidth="20" 
        strokeDasharray="0 440" 
        strokeLinecap="round"
      />
      <circle 
        className="animate-[ringD_2s_linear_infinite] stroke-[#f42582]"
        cx="155" 
        cy="120" 
        r="70" 
        fill="none" 
        strokeWidth="20" 
        strokeDasharray="0 440" 
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Loading;