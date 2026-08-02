import Image from "next/image";

import Navbar from "./components/Navbar";
import ResearchCard from "./components/ResearchCard";



export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffdf7] text-gray-900">

      <Navbar />


      {/* Hero Section */}
      <section className="relative flex min-h-screen pt-24 flex-col items-center justify-center overflow-hidden px-6 text-center">


        {/* Background molecular glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/3 h-72 w-72 rounded-full bg-yellow-200/40 blur-3xl" />
        </div>



        <p className="text-2xl font-semibold text-yellow-600">
          🧬 yougeneit
        </p>



        <h1 className="mt-6 max-w-5xl text-5xl font-bold tracking-tight sm:text-7xl">

          <span className="bg-gradient-to-r from-yellow-500 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">

            Research runs in your DNA.

          </span>

        </h1>



        <p className="mt-6 text-lg text-gray-600">
          Founded by Mandana AmeliMojarad
        </p>



        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-700">

          Decoding how genetic variation, microbial ecosystems,
          and molecular pathways shape human disease through
          cancer biology, genomics, and computational research.

        </p>



        {/* Research keywords */}

        <div className="mt-8 flex flex-wrap justify-center gap-3">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-700">
            Genomics
          </span>

          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm text-yellow-700">
            Cancer Biology
          </span>

          <span className="rounded-full bg-purple-100 px-4 py-2 text-sm text-purple-700">
            Single-cell Biology
          </span>

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm text-green-700">
            Microbiome
          </span>

        </div>



        <div className="mt-10 flex gap-4">


          <button className="rounded-full bg-blue-600 px-8 py-3 text-white transition hover:bg-blue-700">
            Explore Research
          </button>



          <button className="rounded-full border border-gray-300 px-8 py-3 transition hover:bg-gray-100">
            Publications
          </button>


        </div>


      </section>




      {/* Research Section */}

      <section id="research" className="px-6 py-24">


        <h2 className="text-center text-4xl font-bold">
          Research Areas
        </h2>



        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">

          Integrating molecular biology, genomics, and computational
          approaches to understand disease mechanisms.

        </p>




        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2">


          <ResearchCard
            icon="🦠"
            title="Oral–Liver Axis & Hepatocellular Carcinoma"
            description="Understanding how microbial communities, inflammation, and immune signaling influence liver cancer progression."
          />


          <ResearchCard
            icon="🧬"
            title="Microbiome and Cancer Biology"
            description="Investigating microbial molecules and host responses that regulate tumor biology."
          />


          <ResearchCard
            icon="🧠"
            title="PM2.5 & Alzheimer's Genomics"
            description="Integrating environmental exposure, GWAS, and single-cell genomics to uncover disease mechanisms."
          />


          <ResearchCard
            icon="⚙️"
            title="Mitochondrial piRNA Biology"
            description="Exploring non-coding RNA regulation of mitochondrial function and cancer progression."
          />


        </div>


      </section>

{/* About Researcher Section */}


<section id="about" className="px-6 py-24">

  <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

    {/* Photo */}

    <div className="flex justify-center">

      <Image
      
        src="/gallery/mandana.jpg"
        alt="Mandana AmeliMojarad"
        width={420}
        height={520}
        className="rounded-3xl object-cover shadow-xl"
      />

    </div>




    {/* Text */}
    <div>

      <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
        About the Researcher
      </p>


      <h2 className="mt-4 text-4xl font-bold tracking-tight">
        Bridging genomics, biology, and computation to understand disease.
      </h2>


      <p className="mt-6 text-lg leading-relaxed text-gray-700">

        Mandana AmeliMojarad is a researcher working at the intersection
        of cancer biology, genomics, microbiome science, and computational
        approaches to uncover molecular mechanisms underlying human disease.

      </p>


      <p className="mt-4 text-lg leading-relaxed text-gray-700">

        Her research focuses on understanding how genetic variation,
        microbial ecosystems, environmental factors, and molecular pathways
        interact to influence disease progression and therapeutic responses.

      </p>


      <p className="mt-4 text-lg leading-relaxed text-gray-700">

        By integrating multi-omics data, single-cell technologies,
        and computational biology, her work aims to identify novel
        biological mechanisms and potential therapeutic opportunities.

      </p>


    </div>



    {/* Research Identity Card */}
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">


      <h3 className="text-xl font-bold">
        Research Interests
      </h3>


      <div className="mt-6 flex flex-wrap gap-3">


        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-700">
          Cancer Genomics
        </span>


        <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm text-yellow-700">
          Microbiome Biology
        </span>


        <span className="rounded-full bg-purple-100 px-4 py-2 text-sm text-purple-700">
          Single-cell Omics
        </span>


        <span className="rounded-full bg-green-100 px-4 py-2 text-sm text-green-700">
          Computational Biology
        </span>


        <span className="rounded-full bg-red-100 px-4 py-2 text-sm text-red-700">
          Disease Mechanisms
        </span>


      </div>



      <div className="mt-10 border-t pt-6">

        <h3 className="text-xl font-bold">
          Scientific Approach
        </h3>


        <ul className="mt-4 space-y-3 text-gray-700">

          <li>
            🧬 Integrative genomics
          </li>

          <li>
            🦠 Microbial-host interactions
          </li>

          <li>
            🧠 Disease-associated molecular pathways
          </li>

          <li>
            💻 Data-driven biological discovery
          </li>

        </ul>


      </div>


    </div>


  </div>


</section>


{/* Publications Section */}
<section id="publications" className="px-6 py-24 bg-white">

  <div className="mx-auto max-w-6xl">

    <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
      Selected Publications
    </p>

    <h2 className="mt-4 text-4xl font-bold tracking-tight">
      Recent Scientific Contributions
    </h2>

    <p className="mt-4 max-w-3xl text-lg text-gray-600">
      A selection of peer-reviewed publications spanning cancer biology,
      immunology, neurodegeneration, non-coding RNAs, and computational
      genomics.
    </p>

    <div className="mt-12 space-y-6">


{/* Publication */}

<div className="rounded-2xl border border-gray-200 bg-[#fffdf7] p-6 transition hover:border-blue-400 hover:shadow-lg">

  <div className="flex items-center justify-between">

    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
      2025
    </span>

    <span className="text-sm text-gray-500">
     Neuroscience
    </span>

  </div>

  <h3 className="mt-5 text-2xl font-semibold">
    Antibody Drug Conjugates in Alzheimer's Disease: Emerging Strategies and Future Directions
  </h3>

  <p className="mt-3 text-gray-600">
    <strong>Mandana AmeliMojarad</strong>, Melika AmeliMojarad
  </p>

</div>



-----------------------------------------

      {/* Publication */}

      <div className="rounded-2xl border border-gray-200 bg-[#fffdf7] p-6 transition hover:border-blue-400 hover:shadow-lg">

        <div className="flex items-center justify-between">

          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
            2025
          </span>

          <span className="text-sm text-gray-500">
            Frontiers
          </span>

        </div>

        <h3 className="mt-5 text-2xl font-semibold">
          Regulatory Mechanism of Circular RNAs in Brain and Neurodegenerative Diseases
        </h3>

        <p className="mt-3 text-gray-600">
          <strong>Mandana AmeliMojarad</strong>, Melika AmeliMojarad
        </p>

      </div>



      <div className="rounded-2xl border border-gray-200 bg-[#fffdf7] p-6 transition hover:border-blue-400 hover:shadow-lg">

        <div className="flex items-center justify-between">

          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
            2024
          </span>

          <span className="text-sm text-gray-500">
            CNS Neuroscience & Therapeutics
          </span>

        </div>

        <h3 className="mt-5 text-2xl font-semibold">
          The Neuroinflammatory Role of Microglia in Alzheimer's Disease and Their Associated Therapeutic Targets
        </h3>

        <p className="mt-3 text-gray-600">
          Melika AmeliMojarad, <strong>Mandana AmeliMojarad</strong>
        </p>

      </div>



      <div className="rounded-2xl border border-gray-200 bg-[#fffdf7] p-6 transition hover:border-blue-400 hover:shadow-lg">

        <div className="flex items-center justify-between">

          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
            2023
          </span>

          <span className="text-sm text-gray-500">
            Pathology – Research and Practice
          </span>

        </div>

        <h3 className="mt-5 text-2xl font-semibold">
          Prospective Role of PD-1/PD-L1 Immune Checkpoint Inhibitors in GI Cancer
        </h3>

        <p className="mt-3 text-gray-600">
          <strong>Mandana AmeliMojarad</strong>, Melika AmeliMojarad, Xiaonan Cui
        </p>

      </div>



      <div className="rounded-2xl border border-gray-200 bg-[#fffdf7] p-6 transition hover:border-blue-400 hover:shadow-lg">

        <div className="flex items-center justify-between">

          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
            2022
          </span>

          <span className="text-sm text-gray-500">
            Pathology – Research and Practice
          </span>

        </div>

        <h3 className="mt-5 text-2xl font-semibold">
          Exosomal Noncoding RNAs in Colorectal Cancer: Functions, Challenges, Opportunities, and Clinical Applications
        </h3>

        <p className="mt-3 text-gray-600">
          Melika AmeliMojarad,
          <strong> Mandana AmeliMojarad</strong>,
          Ehsan Nazemalhosseini-Mojarad
        </p>

      </div>

    </div>

  </div>

</section>






----------------------------------------------


{/* Research Gallery */}
<section id="gallery" className="bg-[#f8f9fb] px-6 py-24">

  <div className="mx-auto max-w-7xl">

    <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
      Research Gallery
    </p>

    <h2 className="mt-4 text-4xl font-bold tracking-tight">
      Scientific Visualizations
    </h2>

    <p className="mt-4 max-w-3xl text-lg text-gray-600">
      A collection of scientific figures, graphical abstracts,
      pathway illustrations, and research visuals developed to
      communicate complex biological concepts.
    </p>



    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

      <Image
        src="/gallery/figure1.jpg"
        alt="Scientific Figure 1"
        width={700}
        height={500}
        className="rounded-2xl shadow-md transition duration-300 hover:scale-[1.02] hover:shadow-xl"
      />

      <Image
        src="/gallery/figure2.jpg"
        alt="Scientific Figure 2"
        width={700}
        height={500}
        className="rounded-2xl shadow-md transition duration-300 hover:scale-[1.02] hover:shadow-xl"
      />

      <Image
        src="/gallery/figure3.jpg"
        alt="Scientific Figure 3"
        width={700}
        height={500}
        className="rounded-2xl shadow-md transition duration-300 hover:scale-[1.02] hover:shadow-xl"
      />

      <Image
        src="/gallery/figure4.jpg"
        alt="Scientific Figure 4"
        width={700}
        height={500}
        className="rounded-2xl shadow-md transition duration-300 hover:scale-[1.02] hover:shadow-xl"
      />

      <Image
        src="/gallery/figure5.jpg"
        alt="Scientific Figure 5"
        width={700}
        height={500}
        className="rounded-2xl shadow-md transition duration-300 hover:scale-[1.02] hover:shadow-xl"
      />

   

    </div>

  </div>

</section>







-------------------

{/* Contact Section */}
<section id="contact" className="bg-[#f8f9fb] px-6 py-24">

  <div className="mx-auto max-w-4xl text-center">

    <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
      Contact
    </p>

    <h2 className="mt-4 text-4xl font-bold tracking-tight">
      Let's Connect
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
      I welcome opportunities for research collaborations,
      interdisciplinary projects, scientific discussions,
      and academic partnerships in genomics, cancer biology,
      microbiome research, and computational biology.
    </p>



    <div className="mt-12 rounded-3xl border border-gray-200 bg-white p-10 shadow-sm">

      <div className="space-y-6">

        <div>
          <p className="text-sm uppercase tracking-wide text-gray-500">
            Email
          </p>

          <a
            href="mailto:your.email@example.com"
            className="mt-1 block text-lg font-medium text-blue-600 hover:underline"
          >
            mandanalee13@gmail.com
          </a>
        </div>




        <div>
          <p className="text-sm uppercase tracking-wide text-gray-500">
            LinkedIn
          </p>

<a
  href="https://www.linkedin.com/in/mandana-amelimojarad-604807123/"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-1 block text-lg font-medium text-blue-600 hover:underline"
>
  Mandana AmeliMojarad
</a>

        </div>

      </div>

    </div>

  </div>

</section>


<footer className="border-t border-gray-200 bg-white py-8">

  <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-gray-500 md:flex-row">

    <p>
      © {new Date().getFullYear()} yougeneit. All rights reserved.
    </p>

    <p>
      Designed & developed by Mandana AmeliMojarad
    </p>

  </div>

</footer>

    </main>
     );
}