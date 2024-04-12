import Button1 from "../../common/button1";
import Button2 from "../../common/button2";
import './homeLayout.css';


interface HomeLayoutProps {
    className?: string; 
}

function HomeLayout(props: HomeLayoutProps) {
    const { className } = props; // Desestructura className de props

    return (
        <div className={`container ${className}`}>
            <Button1 />
            <Button2 />
        </div>
    );
}

export default HomeLayout