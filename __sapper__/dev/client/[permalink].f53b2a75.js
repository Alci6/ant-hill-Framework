import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, z as empty, c as claim_element, b as children, f as claim_text, g as detach_dev, h as claim_space, k as add_location, l as insert_dev, m as append_dev, A as set_data_dev, n as noop, H as HtmlTag } from './client.c58652b9.js';
import { f as findPost } from './posts.6285cb0d.js';

/* src/routes/posts/[permalink].svelte generated by Svelte v3.28.0 */
const file = "src/routes/posts/[permalink].svelte";

function create_fragment(ctx) {
	let h1;
	let t0_value = /*post*/ ctx[0].title + "";
	let t0;
	let t1;
	let html_tag;
	let raw_value = /*post*/ ctx[0].html + "";
	let html_anchor;

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text(t0_value);
			t1 = space();
			html_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, t0_value);
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			html_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 20, 0, 495);
			html_tag = new HtmlTag(html_anchor);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t0);
			insert_dev(target, t1, anchor);
			html_tag.m(raw_value, target, anchor);
			insert_dev(target, html_anchor, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*post*/ 1 && t0_value !== (t0_value = /*post*/ ctx[0].title + "")) set_data_dev(t0, t0_value);
			if (dirty & /*post*/ 1 && raw_value !== (raw_value = /*post*/ ctx[0].html + "")) html_tag.p(raw_value);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(html_anchor);
			if (detaching) html_tag.d();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function preload(page) {
	// find the post based on the permalink param
	const post = findPost(page.params.permalink);

	// return a list of props
	return { post };
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("U5Bpermalinku5D", slots, []);
	let { post } = $$props;
	const writable_props = ["post"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<U5Bpermalinku5D> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("post" in $$props) $$invalidate(0, post = $$props.post);
	};

	$$self.$capture_state = () => ({ findPost, preload, post });

	$$self.$inject_state = $$props => {
		if ("post" in $$props) $$invalidate(0, post = $$props.post);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [post];
}

class U5Bpermalinku5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { post: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bpermalinku5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*post*/ ctx[0] === undefined && !("post" in props)) {
			console.warn("<U5Bpermalinku5D> was created without expected prop 'post'");
		}
	}

	get post() {
		throw new Error("<U5Bpermalinku5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set post(value) {
		throw new Error("<U5Bpermalinku5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Bpermalinku5D;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3Blcm1hbGlua10uZjUzYjJhNzUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcG9zdHMvW3Blcm1hbGlua10uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICAvLyBpbXBvcnQgdGhlIGxvZ2ljIGZvciBmaW5kaW5nIGEgcG9zdCBiYXNlZCBvbiBwZXJtYWxpbmtcbiAgaW1wb3J0IHsgZmluZFBvc3QgfSBmcm9tIFwiLi4vLi4vcG9zdHNcIjtcblxuICAvLyBzYXBwZXIgY2FsbHMgdGhpcyB0byBsb2FkIG91ciBkYXRhXG4gIGV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkKHBhZ2UpIHtcbiAgICAvLyBmaW5kIHRoZSBwb3N0IGJhc2VkIG9uIHRoZSBwZXJtYWxpbmsgcGFyYW1cbiAgICBjb25zdCBwb3N0ID0gZmluZFBvc3QocGFnZS5wYXJhbXMucGVybWFsaW5rKTtcblxuICAgIC8vIHJldHVybiBhIGxpc3Qgb2YgcHJvcHNcbiAgICByZXR1cm4geyBwb3N0IH07XG4gIH1cbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuICAvLyB0aGlzIHByb3AgaXMgZmlsbGVkIGZyb20gdGhlIHJlc3VsdCBvZiB0aGUgYHByZWxvYWQoKWBcbiAgZXhwb3J0IGxldCBwb3N0O1xuPC9zY3JpcHQ+XG5cbjwhLS0gZGlzcGxheSB0aGUgcG9zdCAtLT5cbjxoMT57cG9zdC50aXRsZX08L2gxPlxuXG57QGh0bWwgcG9zdC5odG1sfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3lCQW9CSyxHQUFJLElBQUMsS0FBSzs7OzswQkFFUixHQUFJLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0RBRlgsR0FBSSxJQUFDLEtBQUs7aUVBRVIsR0FBSSxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBakJFLE9BQU8sQ0FBQyxJQUFJOztPQUVwQixJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUzs7O1VBR2xDLElBQUk7Ozs7OztPQU1KLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
