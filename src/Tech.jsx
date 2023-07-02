import golang from "/Users/fran/programacion/lifulltech/public/golang.png"
import php from "/Users/fran/programacion/lifulltech/public/php.png"
import kotlin from "/Users/fran/programacion/lifulltech/public/kotlin.png"

export default function Tech() {
    return (
        <div className="flex justify-center">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex justify-center items-center gap-x-8 gap-y-10">
                    <a href="https://www.lifullconnect.com/">
                        <img
                            className="max-h-24 w-full object-contain"
                            src={golang}
                            alt="Transistor"
                            width={158}
                            height={60}
                        />              
                    </a>
                    <a href="https://www.lifullconnect.com/">
                        <img
                            className="max-h-16 w-full object-contain"
                            src={php}
                            alt="Reform"
                            width={158}
                            height={60}
                        />
                    </a>
                    <a href="https://www.lifullconnect.com/">
                        <img
                            className="max-h-16 w-full object-contain"
                            src={kotlin}
                            alt="Tuple"
                            width={158}
                            height={60}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}
