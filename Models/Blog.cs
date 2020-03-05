
namespace ngblog.Models
{
    public class Blog{
        
        [Key]
        public int blogId{get;set;}

        public string blogContent{get;set;}

        public string blogSlug{get;set;}

        public string blogTitle{get;set;}

        public string blogSubTitle{get;set;}

        public string featureImageUri{get;set;}
    }
}
