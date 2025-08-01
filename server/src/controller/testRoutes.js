const testServer = async (req,res)=>{
  try {
    return res.status(200).json({
      sucess:true,
      message:"Server Works!"
    })
  } catch (err) {
    return res.status(500).json({
      sucess:false,
      error:err.message
    })
  }
};

module.exports=  testServer


