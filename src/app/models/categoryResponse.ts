export class CategoryResponse {

    profile_category:string[];
    response:string;
    category_name:string;

    setProfileCategory(profile_category:string[])
    {
        this.profile_category=profile_category;
    }

    getProfileCategory()
    {
        return this.profile_category;
    }

    setResponse(response:string)
    {
        this.response=response;
    }

    getResponse()
    {
        return this.response;
    }

    setCategoryName(category_name)
    {
        this.category_name=category_name;
    }

    getCategoryName()
    {
        return this.category_name;
    }
  }