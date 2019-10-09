import all from '../../db/all'

export default (req, res) => {
  all().then(data => {
    res.status(200).json({data: data})  
  })
}