import 'tailwindcss/tailwind.css' //Demo css...
import Image from 'next/image'
import Layout from '../../components/Layout'

export default function Tailwind(){
  return(
    <Layout>
      <div>
        <div className="flex-1">
              <Image src="/download.jpg" width={200} height={150} alt=""/>
              Here’s a simple example of a marketing page component that uses a stacked layout on 
              small screens, and a side-by-side layout on larger scre 
              Here’s a simple example of a marketing page component that uses a stacked layout on 
              small screens, and a side-by-side layout on larger scre 
        </div>
        <div className="flex-1"> 
              Here’s a simple example of a marketing page component that uses a stacked layout on 
              small screens, and a side-by-side layout on larger scre 
              Here’s a simple example of a marketing page component that uses a stacked layout on 
              small screens, and a side-by-side layout on larger scre 
        </div>
        <div className="flex-1"> 
              Here’s a simple example of a marketing page component that uses a stacked layout on 
              small screens, and a side-by-side layout on larger scre 
              Here’s a simple example of a marketing page component that uses a stacked layout on 
              small screens, and a side-by-side layout on larger scre 
        </div>
      </div>
    </Layout>
  )
}