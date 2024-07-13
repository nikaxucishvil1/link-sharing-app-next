import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import arrowDown from "../../../../public/images/icon-chevron-down.svg";

const CustomSelect = (props: CustomSelectProps) => {
  const { links, selectedLink, setSelectedLink } = props;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDocumentClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleSelect = (link: linksData) => {
    setSelectedLink(link);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left text-[#333333] font-[400] text-[16px] px-4 py-2 border border-[#D9D9D9] rounded-[8px] bg-white flex items-center justify-between"
      >
        {selectedLink ? (
          <div className="flex gap-2">
            <Image src={selectedLink.logo} alt="sad" />
            <p>{selectedLink.name}</p>
          </div>
        ) : (
          "Select a platform"
        )}
        <Image src={arrowDown} alt="sad" />
      </button>
      {isOpen && (
        <div className="absolute w-full mt-1 bg-white border rounded shadow-lg z-10 h-[100px] overflow-y-auto">
          {links.map((item, index) => (
            <div
              key={index}
              onClick={() => handleSelect(item)}
              className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer text-[#333333] font-[400] text-[16px]"
            >
              <Image src={item.logo} alt={item.name} width={12} height={14} />
              <span className="ml-2">{item.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
