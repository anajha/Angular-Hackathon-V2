export class FileResultResponse{
    profile_category_match_skillset:string[];
    profile_category:string;
    profile_category_score:string;
    response:string;

    setSkillSet(profile_category_match_skillset:string[])
    {
        this.profile_category_match_skillset=profile_category_match_skillset;
    }

    getSkillSet()
    {
        return this.profile_category_match_skillset;
    }

    setCategory(profile_category:string)
    {
        this.profile_category=profile_category;
    }

    getCategory()
    {
        return this.profile_category;
    }

    setScore(profile_category_score:string)
    {
        this.profile_category_score=profile_category_score
    }

    getScore()
    {
        return this.profile_category_score;
    }
    setResponse(response:string)
    {
        this.response=response;
    }
    getResponse()
    {
        return this.response;
    }
}