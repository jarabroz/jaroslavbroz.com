export type Talk = {
  date: string;
  kind: "Conference" | "Webinar" | "Podcast";
  event: string;
  place?: string;
  href: string;
  title: string;
  with?: string;
  links?: { label: string; href: string }[];
};

export type TalkYear = { year: number; talks: Talk[] };

const RFEM_AI_TITLE =
  "RFEM, RSTAB a Modelování Budoucnosti: Jak AI a API mění hru";
const AUTOMATED_TITLE =
  "Statika zítřka je automatizovaná: Integrace API, AI a pokročilého modelování v RFEM 6";

export const talksByYear: TalkYear[] = [
  {
    year: 2026,
    talks: [
      {
        date: "15 Oct 2026",
        kind: "Conference",
        event: "12th Národná BIM konferencia",
        place: "Bratislava",
        href: "https://en.bimas.sk/bim-konferencia-2026",
        title:
          "BIM za hranicami formátov: od výmeny modelov k parametrizácii a umelej inteligencii",
        links: [
          {
            label: "Proceedings",
            href: "https://en.bimas.sk/_files/ugd/3038c8_e93fe63735424400b9f25d1a5a74160f.pdf",
          },
        ],
      },
      {
        date: "9 Sep 2026",
        kind: "Conference",
        event: "Statika staveb Plzeň 2026",
        place: "ČKAIT",
        href: "https://statika-staveb.ckait.cz/9-rocnik-2026/",
        title:
          "Parametrizace v éře BIM: moderní přístupy ke konstrukčnímu modelování",
      },
      {
        date: "2 Jul 2026",
        kind: "Webinar",
        event: "Dlubal webinar",
        place: "online, EN",
        href: "https://www.dlubal.com/en/support-and-learning/learning/webinars/003801",
        title: "From Code to Calculation: Wind Loads & Steel Joints with Python",
        links: [
          { label: "Recording", href: "https://www.youtube.com/watch?v=25WXNEAtEwA" },
        ],
      },
      {
        date: "12 May 2026",
        kind: "Conference",
        event: "Ocelové konstrukce 2026",
        place: "Brno",
        href: "https://ok-konference.cz/program/",
        title: AUTOMATED_TITLE,
        links: [
          {
            label: "Proceedings",
            href: "https://ok-konference.cz/wp-content/uploads/2026/05/OCELOVE-KONSTRUKCE_SBORNIK-2026.pdf",
          },
          {
            label: "Dlubal news",
            href: "https://www.dlubal.com/en/news-and-events/news/current-news/044372",
          },
        ],
      },
      {
        date: "9 Apr 2026",
        kind: "Conference",
        event: "Statika stavieb 2026",
        place: "Piešťany",
        href: "https://www.sksi.sk/odborne-podujatia/statika-stavieb-2026-30.-konferencia-statikov",
        title: RFEM_AI_TITLE,
        links: [
          {
            label: "Programme",
            href: "https://www.sksi.sk/buxus/docs/Strom_webu_pre_dokumenty/Odborne_podujatia/Statika_stavieb_2026_pozvanka.pdf",
          },
        ],
      },
      {
        date: "25 Mar 2026",
        kind: "Conference",
        event: "Týden oceli, dřeva a skla 2026",
        place: "FSv ČVUT Prague",
        href: "https://portal.fsv.cvut.cz/konfer/ocel/2026/",
        title: AUTOMATED_TITLE,
      },
    ],
  },
  {
    year: 2025,
    talks: [
      {
        date: "Nov 2025",
        kind: "Conference",
        event: "Dlubal Community Day Praha 2025",
        href: "https://www.ckait.cz/dlubal-community-day-praha-2025",
        title: RFEM_AI_TITLE,
        links: [
          {
            label: "Dlubal recap",
            href: "https://www.dlubal.com/en/news-and-events/news/current-news/044012",
          },
        ],
      },
      {
        date: "10 Sep 2025",
        kind: "Conference",
        event: "Statika staveb Plzeň 2025",
        place: "ČKAIT",
        href: "https://statika-staveb.ckait.cz/8-rocnik-2025/",
        title: "Konstrukční modelování 2.0: AI jako součást inženýrské praxe",
        links: [
          {
            label: "Proceedings",
            href: "https://statika-staveb.ckait.cz/wp-content/uploads/2025/10/sbornik-statika-staveb-plzen-2025.pdf",
          },
        ],
      },
      {
        date: "26 Mar 2025",
        kind: "Conference",
        event: "Týden oceli, dřeva a skla 2025",
        place: "FSv ČVUT Prague",
        href: "https://portal.fsv.cvut.cz/konfer/ocel/2025/",
        title: "Konstrukční modelování 2.0: AI jako součást inženýrské praxe",
        with: "Petr Míchal",
      },
    ],
  },
  {
    year: 2024,
    talks: [
      {
        date: "26 Mar 2024",
        kind: "Webinar",
        event: "Dlubal webinar",
        place: "online, EN",
        href: "https://www.dlubal.com/en/support-and-learning/learning/webinars/003155",
        title: "Advanced Structural Analysis with RFEM 6 Python API",
        links: [
          { label: "Recording", href: "https://www.youtube.com/watch?v=zooX0PIch38" },
        ],
      },
    ],
  },
  {
    year: 2023,
    talks: [
      {
        date: "6 Dec 2023",
        kind: "Podcast",
        event: "Dlubal Podcast #070",
        place: "16 min, in German",
        href: "https://open.spotify.com/episode/0ZgeZbXDWwlkmi4iccZHhH",
        title: "BIM World 2023 – Revue, a look back at Dlubal's booth in Munich",
        with: "Lukas Sühnel",
      },
      {
        date: "17 Oct 2023",
        kind: "Conference",
        event: "CADfórum 2023",
        place: "Zámek Valeč",
        href: "https://www.cadforum.cz/forum-archive/forum-posts/posledni-den-pro-registraci-na-cadforum-2023-34649.html",
        title:
          "REVIT & DLUBAL RFEM 6: Propojení konstrukčního modelování a statické analýzy",
        links: [
          {
            label: "Slides",
            href: "https://konference.cadforum.cz/ppt/23/Propojeni_REVIT_RFEM_Dlubal_Broz.pdf",
          },
        ],
      },
      {
        date: "23 May 2023",
        kind: "Webinar",
        event: "Dlubal webinar",
        place: "online, EN",
        href: "https://www.dlubal.com/en/support-and-learning/learning/videos/004246",
        title: "Generating Wind Loads on Dome with Circular Base Using C# Library",
        links: [
          { label: "Recording", href: "https://www.youtube.com/watch?v=OfI9TJkMskc" },
        ],
      },
      {
        date: "28 Feb 2023",
        kind: "Webinar",
        event: "Dlubal webinar",
        place: "online, EN",
        href: "https://www.dlubal.com/en/support-and-learning/learning/webinars/002813",
        title:
          "Integration of RFEM 6 with Web Applications Using WebService Python Library",
        links: [
          { label: "Recording", href: "https://www.youtube.com/watch?v=C3wuNJ9NSfk" },
        ],
      },
    ],
  },
  {
    year: 2022,
    talks: [
      {
        date: "10 Nov 2022",
        kind: "Webinar",
        event: "Dlubal webinar",
        place: "online, EN",
        href: "https://www.dlubal.com/en/support-and-learning/learning/webinars/002719",
        title:
          "Interfaces With RFEM 6 Briefly Presented: Webservice and Rhino/Grasshopper",
        links: [
          { label: "Recording", href: "https://www.youtube.com/watch?v=bNC1bg1iR7o" },
        ],
      },
    ],
  },
];
