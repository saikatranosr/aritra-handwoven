export default function Contact(){
    return <article className="dark:text-white max-w-4xl mx-auto bg-white dark:bg-slate-800 my-2 px-5 md:rounded-md font-light leading-8"> 
        <h1 className='text-3xl font-semibold mb-2'>Contact Us</h1>{" "}
        <p className='p10'>
          <span className='s1'>
            Don&apos;t hesitate to contact us if you have any questions.
          </span>
        </p>{" "}
        <ul className='ul1'>
          <li className='li16'>
            <span className='s3'>
              Via Email: <a>contact@aritrahandwoven.com</a>
            </span>
          </li>{" "}
          <li className='li16'>
            <span className='s3'>
              Via Phone Number: <a>+91 9734470782</a>
            </span>
          </li>{" "}
          <li className='li16'>
            <span className='s3'>
              Via this Link: <a>https://aritrahandwoven.com/contact</a>
            </span>
          </li>{" "}
          <li className='li16'>
            <span className='s3'>
              Via this Address:{" "}
              <a>Shirpara, PO- Duttabarutia, Murshidabad, West Bengal 742401</a>
            </span>
          </li>
        </ul>
    </article>
}