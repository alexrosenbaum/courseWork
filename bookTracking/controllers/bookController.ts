import { book } from '../model/bookModel'
import { searches } from '../model/bookModel'
import { genres } from '../model/bookModel'

export const upload = async (req, res) => {
    try {
        let { title, author, date, genre, description, duration, page } = req.body;
        const newBook = new book({ title, author, date, genre, description, duration, page })


        console.log(newBook)
        const result = await newBook.save()

        res.send({ result });
    } catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}

export const search = async (req, res) => {
    try {
        const { searchTerm } = req.query;
        // const { searching } = req.query;

        //searchTerm in curly brackets - needs to be same name as in client side ev.target 
        const foundSearch = await book.find({ title: searchTerm})
        // const {hello} = searchTerm;
        // console.log(hello);
        // , type, location, description, duration, file 
        // const { hello} = req.body;
        const newSearch = new searches({})
        console.log(newSearch)

        if (newSearch) {

            const result = await newSearch.save()

            console.log(searchTerm);

            console.log({ foundSearch })

            res.send({ searchTerm, foundSearch, result })
            return
        }


    } catch (error) {
        console.error(error)
        res.send({ error: error.message })

    }
}

// export const genre = async (req, res) => {
//    try{
//     //return object with genre selected
//     const { genreCat } = req.query;
//     const genreType = { genreCat }
//     const genreChoice = await genres.find({},{ genre: genreCat })
//     console.log(genreChoice)

//     if (genreType) {
        
//         // console.log(genreChoice);






//         // console.log(genre);

//         // console.log({ genreChoice })

//         res.send({ genre, genreChoice, genreCat })
//         return

//     }
//    }catch (error){
//        console.error(error)
//        res.send({ error: error.message })

//    }


// }
export const genre = async (req, res) => {
    try{
     //return object with genre selected
     const { genreCat } = req.query;
     const genreChoice = await genres.find({},{ genre: genreCat })
     const newGenre = new genres({})
     console.log(newGenre);
     
     
 
     if (newGenre) {
         const result = await newGenre.save()
         // console.log(genreChoice);
 
 
 
 
 
 
         // console.log(genre);
 
         // console.log({ genreChoice })
 
         res.send({  genreChoice, genreCat,result })
         return
 
     }
    }catch (error){
        console.error(error)
        res.send({ error: error.message })
 
    }
 
 
 }