import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from './category';
import { Books } from './books';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const categories = [
      {id: 1, name: "Art"},
      {id: 2, name: "Motivational"},
      {id: 3, name: "Floristry"},
      {id: 4, name: "Contemporary"},
      {id: 5, name: "Poetry"},
      {id: 6, name: "Thriller"},
      {id: 7, name: "Design"},
      {id: 8, name: "Drama"},
      {id: 9, name: "Satire"},
      {id: 10, name: "Guide"}
    ];
    const books = [
      {
        id: 1,
        name: 'BARRAGÁN GUIDE; BARRAGAN FOUNDATION',
        imageLink: 'https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_9645_394x.png?v=1585942786', 
        imageLink2:'https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_9647_800x.png?v=1585942786',
        imageLink3:'https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_9648_800x.png?v=1585942786',
        price: "$ 550.00 USD ",
        description: 'Switzerland. Editorial RM/Barragan Foundation. (2003). Book Condition: Fine.  184 pp. Scarce first edition. ',
        category: 1,
      },
      {
        id: 2,
        name: 'THE ROLLS-ROYCE COMPANION BY KENNETH ULLYETT',
        imageLink: 'https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_9657_800x.jpg?v=1586284917', 
        imageLink2:'https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_9658_800x.jpg?v=1586284917',
        imageLink3:'https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_9660_800x.jpg?v=1586284917',
        price: "$ 45.00 USD ",
        description: 'London. Stanley Paul. (1969). Hard Cover. Book Condition: Fine/Near Fine. First Edition. 143pp. Dust Jacket Condition: Near Fine with slight yellowing and light soiling to flaps and back. This is the first full-length book dealing solely and comprehensively with the modern post-war Rolls-Royce',
        category: 1,
      },
      {
        id: 3,
        name: 'JOE COLOMBO; THE VITRA DESIGN MUSEUM: LARIENNALE DI',
        imageLink: 'https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_9719_800x.jpg?v=1586292548', 
        imageLink2:'https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_9720_800x.jpg?v=1586292600',
        imageLink3:'https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_9728_800x.jpg?v=1585860715',
        price: "$ 175.00 USD ",
        description: 'Milan. Vitra Design Museum. (2005). First Edition. New. Book Condition: Fine. 301 pp. A pristine copy featuring a collection of works by Italian designer Joe Colombo. They exude the spirit of the Sixties yet maintain impressive functionality and striking forms. One of the most successful designers of his time, Colombo produced design classics such as the “Elda” armchair, the “Universale” chair or the lamp “Alogena”. In 1971, he died at 41 years of age. ',
        category: 7,
      },
      {
        id: 4,
        name: 'CONCRETE POETRY: A WORLD VIEW; EDITED BY MARY ELLEN SOLT',
        imageLink: 'https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_9577_800x.png?v=1586292427', 
        imageLink2:'https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_9578_800x.png?v=1586292491',
        imageLink3:'https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_9582_800x.png?v=1585785059',
        price: "$ 200.00 USD ",
        description: 'Indiana University Press, Bloomington. (1970). Limited Edition. Softcover. Book Condition: Near Fine. Very light soiling to cover and creases on bottom corners and along the spine. Still has original inserts. Pages are in excellent condition. An exceptional copy. 312 pp. ',
        category: 5,
      },
      {
        id: 5,
        name: 'DIANA & NIKON: ESSAYS ON THE AESTHETIC OF PHOTOGRAPHY',
        imageLink: 'https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_9649_800x.jpg?v=1586284500', 
        imageLink2:'https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_9651_800x.jpg?v=1586284500',
        imageLink3:'https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_9654_800x.jpg?v=1586284500',
        price: "$ 45.00 USD",
        description: "Boston. David R Godine Publishers Inc, U.S., (1980). Hardcover. First Edition. Book Condition: Fine with slight rubbing on back. Dust Jacket Condition: Near Fine with slight creasing along bottom and staining. ",
        category: 1,
      },
      {
        id: 6,
        name: 'A CHANGE OF PERSPECTIVE',
        imageLink: 'https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_9626_800x.jpg?v=1586282954',
        imageLink2:'https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_9628_800x.jpg?v=1586409946',
        imageLink3:'https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_9631_800x.jpg?v=1586409946',
        price: "$ 30.00 USD ",
        description: 'London: Hogarth Press, (1977). First edition. Hardcover. Book Condition: Fine. with slight creasing on top of spine.  Dust Jacket: Near fine with slight yellowing on back and flaps. 600 pp. ',
        category: 2,
      },
      {
        id: 7,
        name: 'FLOWERS BY GIORGIO MORANDI',
        imageLink: 'https://cdn.shopify.com/s/files/1/0880/2454/products/morandi-edited_800x.png?v=1586392859', 
        imageLink2:'https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_9610_800x.jpg?v=1586392859',
        imageLink3:'https://cdn.shopify.com/s/files/1/0880/2454/products/8_800x.png?v=1586392859',
        price: "$ 150.00 USD",
        description: 'New York. Rizzoli International Publications, Inc. (1985). Book Condition: Fine. Beautiful copy featuring 58 illustrations and photographs in color with some B/W works on paper. Morandis paintings, drawings, and prints all featuring flowers. Text and photographs by Jean-Michel Folon, a Belgian artist, illustrator, painter, and sculptor.',
        category: 3,
      },
      {
        id:8,
        name:"OPUS POSTHUMOUS BY WALLACE STEVENS",
        imageLink:'https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_2235-2_800x.jpg?v=1578528394',
        imageLink2:'https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_2233-2_800x.jpg?v=1578528608',
        imageLink3:'https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_2238-2_800x.jpg?v=1578528608',
        price:"$ 45.00 USD ",
        description:"London, Faber & Faber. 1990. Hardcover. Book Condition: Fine. Dust Jacket Condition: Fine. The posthumous writings of Wallace Stevens, with even more additional poems and writings that have been found since the first publication of this work",
        category: 6,
      },
      {
        id:9,
        name:"OXFORD ADDRESSES ON POETRY BY ROBERT GRAVES",
        imageLink:'https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_1886_1024x-2_800x.jpg?v=1580495250',
        imageLink2:'https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_1890_1024x-2_800x.jpg?v=1580495250',
        imageLink3:'https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_1902_1024x-2_800x.jpg?v=1580495250',
        price:"$ 24.00 USD ",
        description:"London, The Shenval Press. 1961. Hardcover. Book Condition: Fine. Dust Jacket Condition: Fine. Series of lectures given at Oxford by British poet and classicist Robert Graves. 129 pp. ",
        category: 5,
      },
      {
        id:10,
        name:"I WATCHED THE WORLD GLIDE EFFORTLESSLY BYE AND OTHER PIECES BY RICHARD BRAUTIGAN",
        imageLink:"https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_9677_800x.jpg?v=1586286440",
        imageLink2:"https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_9678_800x.jpg?v=1586286441",
        imageLink3:"https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_9679_800x.jpg?v=1586286441",
        price:"$ 350.00 USD ",
        description:"Berkeley. Burton Weiss & James Musser. (1996). Hardcover. Limited Edition. Book Condition: Fine. Covered by original folded acetate. This copy is 1 of only 26 lettered copies (does not include the original enclosed bumper sticker). Quarter-bound in book and paper-covered boards. Printed on high-quality Rives paper. ",
        category: 9,
      },
     {
        id:11,
        name:"STUDENT VOICES / ONE; CHRISTOPHER R. REASKE AND ROBERT F. WILLSON, JR.",
        imageLink:"https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_9619_800x.jpg?v=1586281711",
        imageLink2:"https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_9622_800x.jpg?v=1586410096",
        imageLink3:"https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_9779_800x.jpg?v=1586410096",
        price:"$ 28.00 USD ",
        description:"New York. Random House. (1971). Softcover. Condition: Fine/Near Fine. with slight creasing and light staining/marks. First edition. 233pp. A unique book featuring a cardboard cover with essays on student unrest & activism and black and white photographs. ",
        category: 4,
      },
      {
        id:12,
        name: "MÖBELBAU: IN HOLZ, ROHR UND STAHL BY ERICH DIECKMANN",
        imageLink:"https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_9635_800x.jpg?v=1586292664",
        imageLink2:"https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_9636_800x.jpg?v=1586292684",
        imageLink3:"https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_9640_800x.jpg?v=1586283433",
        price:"$ 600.00 USD ",
        description:"Germany. Julius Hoffmann Verlag. (1931). First Edition. Book Condition: Fine. Dust Jacket Condition: Very Near Fine with some toning.  90 pp. Text in German. An important monograph showing Dieckmann's output in wood, wicker, and steel.  Featuring detailed and interesting illustrations and black and white photographs. A rare and crucial reference of early Modernist design.",
        category: 8,
      },
      {
        id:13,
        name:"OPPOSITIONS: A JOURNAL FOR IDEAS AND CRITICISM IN ARCHITECTURE - WINTER 1976",
        imageLink:"https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_9702_800x.jpg?v=1586287212",
        imageLink2:"https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_9703_800x.jpg?v=1586287212",
        imageLink3:"https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_9706_800x.jpg?v=1586287212",
        price:"$ 40.00 USD ",
        description:"New York. MIT Press. (1976). Softcover. Winter Journal. Book Condition: Near Fine. Creasing along the spine and back. Selected Readings from a Journal for Ideas and Criticism in Architecture.  Winter 1976.",
        category: 4,
      },
      {
        id:14,
        name:"THE LYTTELTON HART-DAVIS LETTERS: CORRESPONDENCE OF GEORGE LYTTELTON AND RUPERT HART-DAVIS",
        imageLink:"https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_9763_800x.jpg?v=1586409807",
        imageLink2:"https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_9764_800x.jpg?v=1586409807",
        imageLink3:"https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_9769_800x.jpg?v=1586409807",
        price:"$ 200.00 USD",
        description:"London. John Murray. (1978). Hardcover. First Edition (Vols. 1 & 2 Second Printing). Book Set Condition: Fine. Dust Jackets: Fine. A rare complete six-volume set in excellent condition featuring correspondence letters between Lyttelton and Hart-Davis. George Lyttelton was a classics and literature master at Eton, where he taught Rupert Hart-Davis. 25 years after Eton the men began a weekly correspondence, which they maintained until Lyttelton's death in 1968. ",
        category: 2,
      },
      {
        id:15,
        name:"THE PERFECT THOUGHT; WORKS BY JAMES LEE BYARS",
        imageLink:"https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_9592_800x.png?v=1585943031",
        imageLink2:"https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_9597_800x.jpg?v=1585943044",
        imageLink3:"https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_9596_800x.jpg?v=1585943044",
        price:"$ 70.00 USD ",
        description:"Berkeley. University Art Museum. (1990). Hardcover. First Edition. Book Condition: Near Fine with small markings on back and small stains, slight discoloration on pages. A catalog of an exhibition held at UCLA Berkeley in 1990 featuring 23 sculptural works by celebrated artist James Lee Byars. Three essays address aspects of the artist and his work as well as multiple photographs in color and black and white.",
        category: 2,
      },
      {
        id:16,
        name:"NODIDEN BY NAHL NUCHA",
        imageLink:"https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_2840_800x.jpg?v=1580176242",
        imageLink2:"https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_2842_a7c29bff-a2d7-42a0-8dae-7613b78715a3_800x.jpg?v=1580176346",
        imageLink3:"https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_2845_800x.jpg?v=1580176341",
        price:"$ 100.00 USD ",
        description:"Netherlands. Subvers-press. (1971). First Edition. Softcover. Book Condition: Fine. Sparse. Type-written poems using letterforms titled Nodiden. Created by Nahl Nucha, a pseudonym of Dutch poet, artist and museum director Wouter Kotte. Text in Dutch. Saddle stapled square book with cardstock cover. 25pp.",
        category: 11,
      },
    ]

    return {categories, books};
  }
  genId<T extends Category | Books>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 11;
  }
}
