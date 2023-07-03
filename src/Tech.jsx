import golang from "/Users/fran/programacion/lifulltech/public/golang.png"
import php from "/Users/fran/programacion/lifulltech/public/php.png"
import kotlin from "/Users/fran/programacion/lifulltech/public/kotlin.png"
import { Link } from "react-router-dom"

export default function Tech() {
    return (
        <div className="flex justify-center">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex justify-center items-center gap-x-8 gap-y-10">
                    <Link to="/gocustom">
                        <img
                            className="max-h-28 w-full object-contain brightness-50 hover:brightness-100"
                            src={golang}
                            alt="Transistor"
                            width={158}
                            height={60}
                        />        
                    </Link>
                    <Link to="/phpparser">
                        <img
                            className="max-h-16 w-full object-contain brightness-50 hover:brightness-100"
                            src={php}
                            alt="Reform"
                            width={158}
                            height={60}
                        />
                    </Link>
                    <Link to="/parseads">
                        <img
                            className="max-h-16 w-full object-contain brightness-50 hover:brightness-100"
                            src={kotlin}
                            alt="Tuple"
                            width={158}
                            height={60}
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}
