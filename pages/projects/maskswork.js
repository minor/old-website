import Head from 'next/head'
import Layout from '../../components/layout'

const Divider = () => {
    return (
      <div className="border border-gray-200 dark:border-gray-600 my-8" />
    );
  };

export default function MasksWork() {
  return (
    <Layout>
      <Head>
        <title>Saurish Srivastava: Masks Work</title>
      </Head>
      <div className="flex flex-col justify-center items-center max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Masks Work
        </h1>
        <br />
        <h2 className="font-bold text-2xl md:text-3xl tracking-tight mb-4 text-black dark:text-white">
          Please wear them!
        </h2>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Masks <span className="font-bold">work</span> and shouldn't be a political question, but rather a moral one. If you would rather have higher chances of being exposed to the coronavirus pandemic,
            be my guest. But please, be a <span className="font-bold">good human</span> and lower the chances for transmission to others. I will try to update these.
            <br /><br />
            <span className="font-bold">Update</span>: I ended up not updating this because I've now realized that this information has been broadcasted on a national level. There are still people who wish not to follow
            guidelines, but that is an individual choice; one that definitely was not influenced by science, but nonetheless, an individual choice. I will keep this here for anyone to go through
            some interesting papers.
          </p>
          <Divider />
          <p>
          <span className="font-bold">5.</span> August 07: <a href="https://advances.sciencemag.org/content/advances/early/2020/08/07/sciadv.abd3083.full.pdf">Duke University</a>
          {' '}- explains the difference in 14 different types of masks (bandanas and fleeces suck!) also shows that the "droplet transmission" 
          through face masks is <u>significantly</u> lower than the "droplet transmission" through no mask. please read
          if you don't know what type of mask to wear/buy or if you don't quite understand why masks work.
        </p>
        <a href="https://advances.sciencemag.org/content/advances/early/2020/08/07/sciadv.abd3083.full.pdf">
            <center><img className="border p-1 w-48 block mx-px rounded-2xl hover:bg-blue-600" src="/images/masks5.jpg" alt="The results of the Duke study"></img></center>
        </a>
        <p>
          <span className="font-bold">4.</span> June 16: <a href="https://www.healthaffairs.org/doi/pdf/10.1377/hlthaff.2020.00818">Health Affairs</a>
          {' '}- a study of social distancing and mask wearing regulations in the US. social distancing and wearing a face mask <u><span className="font-bold">-{'>'}</span></u>
          {' '}led to a decline in the cases of covid-19 in the US writ large. not wearing a mask and not social distancing <u><span className="font-bold">-{'>'}</span></u>
          {' '}more cases of covid-19.
        </p>
        <a href="https://www.healthaffairs.org/doi/pdf/10.1377/hlthaff.2020.00818">
            <center><img className="border p-1 w-48 block mx-px rounded-2xl hover:bg-blue-600" src="/images/masks4.jpg" alt="The results of Health Affairs' study"></img></center>
        </a>
        <p>
          <span className="font-bold">3.</span> June 01: <a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(20)31142-9/fulltext">The Lancet</a>
          {' '}- a study of social distancing, mask wearing, and eye protection. social distancing <u><span className="font-bold">-{'>'}</span></u> less transmission of a virus
          ([PaOR] 0.18, 95% CI 0.09 to 0.38; [RD] −10.2%, 95% CI −11.5 to −7.5) with protection increasing w/ distance increasing. wearing a face mask
          {' '}<u><span className="font-bold">-{'>'}</span></u> large reduction of risk of infection ([PaOR] 0.15, 95% CI 0.07 to 0.34, [RD] −14.3%, −15.9 to -10.7)
        </p>
        <a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(20)31142-9/fulltext">
            <center><img className="border p-1 w-48 block mx-px rounded-2xl hover:bg-blue-600" src="/images/masks3.jpg" alt="The results of The Lancet's study"></img></center>
        </a>
        <p>
          <span className="font-bold">2.</span> April 24: <a href="https://pubs.acs.org/doi/10.1021/acsnano.0c03252">The American Chemical Society</a>
          {' '}- measure of the filtration efficiencies of different types of masks. cotton, natural silk, and chiffon {' '}
          <u><span className="font-bold">-{'>'}</span></u> good protection (+50%). opening/gaps in masks <u><span className="font-bold">-{'>'}</span></u> degrades
          performance. please read if you don't know what type of mask to wear/buy or if you don't quite understand why masks work.
        </p>
        <a href="https://pubs.acs.org/doi/10.1021/acsnano.0c03252">
            <center><img className="border p-1 w-48 block mx-px rounded-2xl hover:bg-blue-600" src="/images/masks2.jpg" alt="The results of The American Chemical Society's study"></img></center>
        </a>
        <p>
          <span className="font-bold">1.</span> April 03: <a href="https://www.nature.com/articles/s41591-020-0843-2">Nature Medicine</a>
          {' '}- a study of respiratory droplets with correlation to mask wearing. without masks <u><span className="font-bold">-{'>'}</span></u> detected coronavirus in 
          30% and 40% of respiratory droplets and aerosols (respectively). with a mask <u><span className="font-bold">-{'>'}</span></u> detected coronavirus in 0% of
          respiratory droplets and aerosols.<br /><br />
          <a href="https://www.nature.com/articles/s41591-020-0843-2">
            <center><img className="border p-1 w-48 block mx-px rounded-2xl hover:bg-blue-600" src="/images/masks1.jpg" alt="The results of Nature Medicine's study"></img></center>
          </a>
          <br /><span className="font-bold"><center>Please wear a mask and stay safe!</center></span>
        </p> 
        </div>
      </div>
    </Layout>
  )
}