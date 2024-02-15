const fetchBlogData = async (e) => {
    try {
        //   const response = await axios.post('http://localhost:3000/api/addcontmessage', { name, email , mobileNumber , message });
          
          const response = await fetch("/api/getallblogs", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        } 
      });

      console.log('before response.json')

     const { success1 , error , result } = await response.json();

        console.log('Blogs Get  successfully:', success1);
        if(error!==undefined) {
            console.log('Blogs Get error:', error);
        }
        console.log('Blogs Get result:', result);
        // setCustomersData(result)
        console.log('inside fetchblogdata result is:' , result)
        return result;
          //  setName('');
          // setEmail('');
          // setMobileNumber('');
          // setAddress('')
      } catch (error) {
          console.error('Blogs Get operation error', error);
      }  };

      export default fetchBlogData