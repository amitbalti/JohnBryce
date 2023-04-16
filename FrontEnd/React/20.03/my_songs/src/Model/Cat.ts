import Category from "./Category";

class Categories {
  private categoryList: Category[] = [];

  async load() {
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/videos/allCat",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to get categories");
      }
      this.categoryList = await response.json();
    } catch (error) {
      console.error(error);
      alert("Failed to get all Categories");
    }
  }

  addCat = (newCategoryName: string) => {
    // TODO - call BE to add new category
    // this.categoryName.push(newCategoryName);
  };

  allCat = (): Category[] => {
    return this.categoryList;
  };
}

let cat = new Categories();
cat.load();

export default cat;
