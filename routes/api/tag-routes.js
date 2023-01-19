const router = require('express').Router();


const { Tag, Product, ProductTag } = require('../../models');



// The `/api/tags` endpoint


router.get('/', async (req, res) => {
  // they must share parent. Tag.findAll uses Tag.belongsToMany and its associated vars in model index
  try {
    const x = await Tag.findAll({
      include: [{ model: Product, through: ProductTag, as: 'tagsinproduct' }],
    });
    res.status(200).json(x);
  } catch (err) {
    res.status(500).json(err);
  }});



router.get('/:id', async (req, res) => {

  try {
    const x = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag, as: 'tagsinproduct' }],
    });

    if (!x) {
      res.status(404).json({ message: 'Tag not found' });
      return;
    }

    res.status(200).json(x);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.post('/', async (req, res) => {

  try {
    const x = await Tag.create(req.body);
    res.status(200).json(x);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {

try {
    const x = await Tag.update({
      tag_name: req.body.tag_name,
    },
    {
        where: {id: req.params.id,},
    });

    if (!x) {
      res.status(404).json({ message: 'Tag not found' });
      return;
    }
    res.status(200).json(x);
  } catch (err) {
    res.status(400).json(err);
  }
});



router.delete('/:id', async (req, res) => {

  try {
    const x = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!x) {
      res.status(404).json({ message: 'Tag not found' });
      return;
    }

    res.status(200).json(x);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
