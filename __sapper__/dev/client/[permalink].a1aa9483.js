import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, a as space, o as create_component, t as text, q as query_selector_all, c as claim_element, g as detach_dev, h as claim_space, b as children, p as claim_component, f as claim_text, k as attr_dev, j as add_location, m as append_dev, l as insert_dev, r as mount_component, F as set_data_dev, u as transition_in, w as transition_out, x as destroy_component, H as HtmlTag } from './client.d81880d1.js';
import { _ as _1_Title } from './1-Title.c146d0d1.js';
import { _ as _99_Credits } from './99-Credits.705f5e03.js';
import { f as findPost } from './posts.abe9ac5d.js';

/* src/routes/blog/[permalink].svelte generated by Svelte v3.28.0 */
const file = "src/routes/blog/[permalink].svelte";

function create_fragment(ctx) {
	let title_value;
	let meta0;
	let meta0_content_value;
	let meta1;
	let meta1_content_value;
	let meta2;
	let meta2_content_value;
	let t0;
	let main;
	let title;
	let t1;
	let h1;
	let t2_value = /*post*/ ctx[0].title + "";
	let t2;
	let t3;
	let html_tag;
	let raw_value = /*post*/ ctx[0].html + "";
	let t4;
	let credits;
	let current;
	document.title = title_value = "Blog | " + /*post*/ ctx[0].title;
	title = new _1_Title({ $$inline: true });
	credits = new _99_Credits({ $$inline: true });

	const block = {
		c: function create() {
			meta0 = element("meta");
			meta1 = element("meta");
			meta2 = element("meta");
			t0 = space();
			main = element("main");
			create_component(title.$$.fragment);
			t1 = space();
			h1 = element("h1");
			t2 = text(t2_value);
			t3 = space();
			t4 = space();
			create_component(credits.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1eiyz83\"]", document.head);
			meta0 = claim_element(head_nodes, "META", { property: true, content: true });
			meta1 = claim_element(head_nodes, "META", { name: true, content: true });
			meta2 = claim_element(head_nodes, "META", { property: true, content: true });
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			main = claim_element(nodes, "MAIN", { class: true });
			var main_nodes = children(main);
			claim_component(title.$$.fragment, main_nodes);
			t1 = claim_space(main_nodes);
			h1 = claim_element(main_nodes, "H1", {});
			var h1_nodes = children(h1);
			t2 = claim_text(h1_nodes, t2_value);
			h1_nodes.forEach(detach_dev);
			t3 = claim_space(main_nodes);
			main_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			claim_component(credits.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			attr_dev(meta0, "property", "og:title");
			attr_dev(meta0, "content", meta0_content_value = /*post*/ ctx[0].title);
			add_location(meta0, file, 24, 2, 642);
			attr_dev(meta1, "name", "description");
			attr_dev(meta1, "content", meta1_content_value = /*post*/ ctx[0].description);
			add_location(meta1, file, 25, 2, 694);
			attr_dev(meta2, "property", "og:description");
			attr_dev(meta2, "content", meta2_content_value = /*post*/ ctx[0].description);
			add_location(meta2, file, 27, 2, 752);
			add_location(h1, file, 34, 2, 897);
			html_tag = new HtmlTag(null);
			attr_dev(main, "class", "sections");
			add_location(main, file, 30, 0, 830);
		},
		m: function mount(target, anchor) {
			append_dev(document.head, meta0);
			append_dev(document.head, meta1);
			append_dev(document.head, meta2);
			insert_dev(target, t0, anchor);
			insert_dev(target, main, anchor);
			mount_component(title, main, null);
			append_dev(main, t1);
			append_dev(main, h1);
			append_dev(h1, t2);
			append_dev(main, t3);
			html_tag.m(raw_value, main);
			insert_dev(target, t4, anchor);
			mount_component(credits, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if ((!current || dirty & /*post*/ 1) && title_value !== (title_value = "Blog | " + /*post*/ ctx[0].title)) {
				document.title = title_value;
			}

			if (!current || dirty & /*post*/ 1 && meta0_content_value !== (meta0_content_value = /*post*/ ctx[0].title)) {
				attr_dev(meta0, "content", meta0_content_value);
			}

			if (!current || dirty & /*post*/ 1 && meta1_content_value !== (meta1_content_value = /*post*/ ctx[0].description)) {
				attr_dev(meta1, "content", meta1_content_value);
			}

			if (!current || dirty & /*post*/ 1 && meta2_content_value !== (meta2_content_value = /*post*/ ctx[0].description)) {
				attr_dev(meta2, "content", meta2_content_value);
			}

			if ((!current || dirty & /*post*/ 1) && t2_value !== (t2_value = /*post*/ ctx[0].title + "")) set_data_dev(t2, t2_value);
			if ((!current || dirty & /*post*/ 1) && raw_value !== (raw_value = /*post*/ ctx[0].html + "")) html_tag.p(raw_value);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(title.$$.fragment, local);
			transition_in(credits.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(title.$$.fragment, local);
			transition_out(credits.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			detach_dev(meta0);
			detach_dev(meta1);
			detach_dev(meta2);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(main);
			destroy_component(title);
			if (detaching) detach_dev(t4);
			destroy_component(credits, detaching);
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

	$$self.$capture_state = () => ({ Title: _1_Title, findPost, preload, post, Credits: _99_Credits });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3Blcm1hbGlua10uYTFhYTk0ODMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYmxvZy9bcGVybWFsaW5rXS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG4gIGltcG9ydCBUaXRsZSBmcm9tIFwiLi8uLi8uLi9jb21wb25lbnRzLzEtVGl0bGUuc3ZlbHRlXCI7XG4gIC8vIGltcG9ydCB0aGUgbG9naWMgZm9yIGZpbmRpbmcgYSBwb3N0IGJhc2VkIG9uIHBlcm1hbGlua1xuICBpbXBvcnQgeyBmaW5kUG9zdCB9IGZyb20gXCIuLi8uLi9wb3N0c1wiO1xuXG4gIC8vIHNhcHBlciBjYWxscyB0aGlzIHRvIGxvYWQgb3VyIGRhdGFcbiAgZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWQocGFnZSkge1xuICAgIC8vIGZpbmQgdGhlIHBvc3QgYmFzZWQgb24gdGhlIHBlcm1hbGluayBwYXJhbVxuICAgIGNvbnN0IHBvc3QgPSBmaW5kUG9zdChwYWdlLnBhcmFtcy5wZXJtYWxpbmspO1xuXG4gICAgLy8gcmV0dXJuIGEgbGlzdCBvZiBwcm9wc1xuICAgIHJldHVybiB7IHBvc3QgfTtcbiAgfVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gIC8vIHRoaXMgcHJvcCBpcyBmaWxsZWQgZnJvbSB0aGUgcmVzdWx0IG9mIHRoZSBgcHJlbG9hZCgpYFxuICBleHBvcnQgbGV0IHBvc3Q7XG5cbiAgaW1wb3J0IENyZWRpdHMgZnJvbSBcIi4vLi4vLi4vY29tcG9uZW50cy85OS1DcmVkaXRzLnN2ZWx0ZVwiO1xuPC9zY3JpcHQ+XG5cbjxzdmVsdGU6aGVhZD5cbiAgPHRpdGxlPkJsb2cgfCB7cG9zdC50aXRsZX08L3RpdGxlPlxuICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17cG9zdC50aXRsZX0gLz5cbiAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17cG9zdC5kZXNjcmlwdGlvbn0gLz5cblxuICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17cG9zdC5kZXNjcmlwdGlvbn0gLz5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxtYWluIGNsYXNzPVwic2VjdGlvbnNcIj5cblxuICA8VGl0bGUgLz5cbiAgPCEtLSBkaXNwbGF5IHRoZSBwb3N0IC0tPlxuICA8aDE+e3Bvc3QudGl0bGV9PC9oMT5cblxuICB7QGh0bWwgcG9zdC5odG1sfVxuXG48L21haW4+XG5cbjxDcmVkaXRzIC8+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lCQWtDTyxHQUFJLElBQUMsS0FBSzs7OzswQkFFUixHQUFJLElBQUMsSUFBSTs7OztxREFiRCxHQUFJLElBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2REFDVSxHQUFJLElBQUMsS0FBSzs7OzZEQUNYLEdBQUksSUFBQyxXQUFXOzs7NkRBRVQsR0FBSSxJQUFDLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrRkFKMUMsR0FBSSxJQUFDLEtBQUs7Ozs7aUdBQ1UsR0FBSSxJQUFDLEtBQUs7Ozs7aUdBQ1gsR0FBSSxJQUFDLFdBQVc7Ozs7aUdBRVQsR0FBSSxJQUFDLFdBQVc7Ozs7NkVBT3BELEdBQUksSUFBQyxLQUFLOytFQUVSLEdBQUksSUFBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0E5QkEsT0FBTyxDQUFDLElBQUk7O09BRXBCLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTOzs7VUFHbEMsSUFBSTs7Ozs7O09BTUosSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
