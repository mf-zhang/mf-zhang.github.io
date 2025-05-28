module Jekyll
  class CVPathTag < Liquid::Tag
    def render(context)
      context.registers[:site].data['cv']['latest_cv_path']
    end
  end
end

Liquid::Template.register_tag('cv_path', Jekyll::CVPathTag) 