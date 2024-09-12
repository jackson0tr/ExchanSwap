import { useEffect, useState } from "react";



const Dollar = () => {
    const colors = ['#1E90FF', '#4169E1', '#00BFFF', '#4682B4', '#5F9EA0'];
    const [currentColor, setCurrentColor] = useState<string>(colors[0]);

    useEffect(() => {
        const colorInterval = setInterval(() => {
            setCurrentColor(colors[Math.floor(Math.random() * colors.length)]);
        }, 2000);

        return () => clearInterval(colorInterval);
    }, []);
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden dollar-background">
            {[...Array(30)].map((_, index) => (
                <div
                    key={index}
                    className="dollar-sign"
                    style={{
                        color: currentColor,
                        top: `${Math.random() * 100}vh`,
                        left: `${Math.random() * 100}vw`,
                        animationDuration: `${Math.random() * 20 + 5}s`,
                    }}
                >
                    $
                </div>
            ))}
        </div>
    )
}

export default Dollar;