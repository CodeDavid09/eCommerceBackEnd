const router = require("express").Router();
const { Category, Product } = require("../../models");

router.get("/", (req, res) => {
  // find All catergories
  Category.findAll({
    include: {
      model: Product,
      // attributes: ["id", "product_name", "price", "stock", "category_id"],
    },
  })
    // if category does not exist, return error
    .then((categories) => {
      // if (!categories) => { {
      //   res.status(404).json({ message: "No categories found" });
      //   return;
      // }
      res.json(categories);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: Product,
      attributes: ["id", "product_name", "price", "stock", "category_id"],
    },
  })
    .then((category) => {
      if (!category) {
        res.status(404).json({ message: "No categories found" });
        return;
      }
      res.json(category);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Category.create({
    category_name: req.body.category_name,
  })
    .then((category) => res.json(category))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(category => {
      if (!category) {
        res.status(404).json({message:'No category found with this id'});
        return;
      }
      res.json(category);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(category => {
      if (!category){
        res.status(404).json({message: 'No category found with that id.'});
        return;
      }
      res.json(category);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
