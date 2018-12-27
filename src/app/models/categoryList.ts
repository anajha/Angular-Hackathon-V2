export class CategoryList{

    category_name:string;
    user_name:string;
    category_list:string[];

    setCategoryName(category_name:string)
    {
        this.category_name=category_name;
    }

    getSkillSet()
    {
        return this.category_name;
    }

    setUserName(user_name:string)
    {
        this.user_name=user_name;
    }

    getUserName()
    {
        return this.user_name;
    }

    setCategoryList(category_list:string[])
    {
        this.category_list=category_list;
    }

    getCategoryList()
    {
        return this.category_list;
    }
}